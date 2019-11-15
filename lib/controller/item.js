"use strict";

import Item from '../models/item';
import ActivityService from '../service/activity';
import Constant from '../core/constant';

class ItemController {
    constructor() {
        this.limit = Constant.paging.item + 1;
    }
    get = async (req, res, next) => {
        try {
            let item = await Item.findOne({_id:req.params.id}).lean();
            if(!item)
                return res.status(404).send('Item not found')
            const response = { item: item }
        	return res.status(200).send(response)
        } catch(err) {
          	next(err);
        }
    }
    find = async (req, res, next) => {
        try {
            let query = {};

            if(req.query.nextId) {
                query['_id'] = {'$lte': req.query.nextId}
            }
            let items = await Item.find(query).sort({createdAt: -1}).limit(this.limit).lean();
            let response = {};
            if(items.length == this.limit) {
                let nextItem = items.pop();
                response.nextId = nextItem._id;
            }
            response.items = items;
            return res.status(200).send(response)
        } catch(err) {
          	next(err);
        }
    }
    create = async (req, res, next) => {
        console.log(req.user._id)
        try {
        	let item = new Item(req.item);
            await item.save();
            const entity = { id: item._id, type: Constant.entityType.item, name: item.name};
            await ActivityService.add(req.user._id, Constant.activityType.created, entity);
            return res.status(201).send("Item Created Successfully")
        } catch(err) {
          	next(err);
        }
    }
    update = async (req, res, next) => {
        try {
            let item = await Item.findOneAndUpdate({_id:req.params.id}, req.item, {new: true}).lean();
            if(!item) 
                return res.status(404).send('Item not found. Invalid Item Id')
            const entity = { id: item._id, type: Constant.entityType.item, 
                name: item.name, fields: Object.keys(req.item)};
            await ActivityService.add(req.user._id, Constant.activityType.edited, entity);
            return res.status(200).send("Item Updated Successfully")
        } catch(err) {
          	next(err);
        }
    }
    remove = async (req, res, next) => {
        try {
            let item = await Item.findOneAndRemove({_id:req.params.id}).lean();
            if(!item) 
                return res.status(404).send('Item not found. Invalid Item Id')
            const entity = { id: item._id, type: Constant.entityType.item, name: item.name};
            await ActivityService.add(req.user._id, Constant.activityType.deleted, entity);
        	return res.status(200).send("Item Removed Successfully")
        } catch(err) {
          	next(err);
        }
    }
}

export default new ItemController();