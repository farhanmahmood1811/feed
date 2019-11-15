"use strict";

class ItemValidator {
    create = (req, res, next) => {
        let item = {};
        if(!req.body.name) {
            return res.status(400).send("Name Required");
        } else if(!req.body.name.trim().length) {
            return res.status(400).send("Name Required");
        }
        item.name = req.body.name.trim();

        if(!req.body.brand) {
            return res.status(400).send("Brand Required");
        } else if(!req.body.brand.trim().length) {
            return res.status(400).send("Brand Required");
        }
        item.brand = req.body.brand.trim();
        
        if(!req.body.category) {
            return res.status(400).send("Category Required");
        } else if(!req.body.category.trim().length) {
            return res.status(400).send("Category Required");
        }
        item.category = req.body.category.trim();

        req.item = item;
        next()
    }

    update = (req, res, next) => {
        let item = {};
        if(req.body.name) {
            if(req.body.name.trim().length) 
                item.name = req.body.name;
            else{
                return res.status(400).send("Name Cannot Be Empty");

            }
        }
        if(req.body.brand) {
            if(req.body.brand.trim().length) 
                item.brand = req.body.brand.trim();
            else
                return res.status(400).send("Brand Cannot Be Empty");
        }
        
        if(req.body.category) {
            if(req.body.category.trim().length) 
                item.category = req.body.category.trim();
            else
                return res.status(400).send("Category Cannot Be Empty");
        }

        if(!Object.keys(item).length) {
            return res.status(400).send("No Valid Data To Update");
        }
        req.item = item;
        next()
    }
}

export default new ItemValidator();
