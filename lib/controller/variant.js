"use strict";

import Variant from '../models/variant';
import Constant from '../core/constant';
import ActivityService from '../service/activity';

class VariantController {
    constructor() {
        this.limit = Constant.paging.variant + 1;
    }
    get = async (req, res, next) => {
        try {
            let variant = await Variant.findOne({_id:req.params.id}).lean();
            if(!variant)
                return res.status(404).send('Variant Not Found. Invalid Variant Id');
            const response = { variant: variant };
        	return res.status(200).send(response);
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
            let variants = await Variant.find(query).sort({createdAt: -1}).limit(this.limit).lean();
            let response = {};
            if(variants.length == this.limit) {
                let nextVariant = variants.pop();
                response.nextId = nextVariant._id;
            }
            response.variants = variants;
            return res.status(200).send(response);
        } catch(err) {
          	next(err);
        }
    }
    create = async (req, res, next) => {
        try {
        	let variant = new Variant(req.variant);
            await variant.save();
            const entity = { id: variant._id, type: Constant.entityType.variant, name: variant.name};
            await ActivityService.add(req.user._id, Constant.activityType.created, entity);
        	return res.status(201).send("Variant Created Successfully");
        } catch(err) {
          	next(err);
        }
    }
    update = async (req, res, next) => {
        try {
            let variant = await Variant.findOneAndUpdate({_id:req.params.id}, req.variant, {new: true}).lean();
            if(!variant) 
                return res.status(404).send('Variant not found. Invalid Variant Id');
                const entity = { id: variant._id, type: Constant.entityType.variant, 
                    name: variant.name, fields: Object.keys(req.variant)};
                await ActivityService.add(req.user._id, Constant.activityType.edited, entity);
            return res.status(200).send("Variant Updated Successfully");
        } catch(err) {
          	next(err);
        }
    }
    remove = async (req, res, next) => {
        try {
            let variant = await Variant.findOneAndRemove({_id:req.params.id}).lean();
            if(!variant) 
                return res.status(404).send('Variant not found. Invalid Variant Id');
            const entity = { id: variant._id, type: Constant.entityType.variant, name: variant.name};
            await ActivityService.add(req.user._id, Constant.activityType.deleted, entity);
        	return res.status(200).send("Variant Removed Successfully");
        } catch(err) {
          	next(err);
        }
    }
}

export default new VariantController();