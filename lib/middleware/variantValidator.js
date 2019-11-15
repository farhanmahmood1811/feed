"use strict";

class VariantValidator {
    create = (req, res, next) => {
        let variant = {};
        if(!req.body.itemId) {
            return res.status(400).send("Item Id Required");
        } else if(!req.body.itemId.trim().length) {
            return res.status(400).send("Item Id Required");
        }
        variant.itemId = req.body.itemId.trim();

        if(!req.body.name) {
            return res.status(400).send("Name Required");
        } else if(!req.body.name.trim().length) {
            return res.status(400).send("Name Required");
        }
        variant.name = req.body.name.trim();

        if(!req.body.sellingPrice) {
            return res.status(400).send("Selling Price Required");
        } else if(Number.isNaN(parseInt(req.body.sellingPrice))) {
            return res.status(400).send("Selling Price Should Be Number");
        }
        variant.sellingPrice = parseInt(req.body.sellingPrice);
        
        if(!req.body.costPrice) {
            return res.status(400).send("Cost Price Required");
        } else if(Number.isNaN(parseInt(req.body.costPrice))) {
            return res.status(400).send("Cost Price Should Be Number");
        }
        variant.costPrice = parseInt(req.body.costPrice);

        if(!req.body.properties) {
            return res.status(400).send("Properties Required");
        } else if(!req.body.properties.trim().length){
            return res.status(400).send("Properties Required");
        }
        variant.properties = req.body.properties.trim();

        if(!req.body.quantity) {
            return res.status(400).send("Quantity Required");
        } else if(Number.isNaN(parseInt(req.body.quantity))) {
            return res.status(400).send("Quantity Should Be Number");
        }
        variant.quantity = parseInt(req.body.quantity);

        req.variant = variant;
        next()
    }

    update = (req, res, next) => {
        let variant = {};

        if(req.body.name) {
            req.body.name = req.body.name.trim();
            if(req.body.name.length)
                variant.name = req.body.name;
            else
                return res.status(400).send("Name Cannot Be Empty");
        }
        
        if(req.body.sellingPrice) {
            if(Number.isNaN(parseInt(req.body.sellingPrice))) {
                return res.status(400).send("Selling Price Should Be Number");
            }
            variant.sellingPrice = parseInt(req.body.sellingPrice);
        }
        
        if(req.body.costPrice) {
            if(Number.isNaN(parseInt(req.body.costPrice))) {
                return res.status(400).send("Cost Price Should Be Number");
            }
            variant.costPrice = parseInt(req.body.costPrice);
        }
        
        if(req.body.properties) {
            req.body.properties = req.body.properties.trim()
            if(req.body.properties.length) 
                variant.name = req.body.name;
            else 
                return res.status(400).send("Properies Cannot Be Empty");
        }
        
        if(req.body.quantity) {
            if(Number.isNaN(parseInt(req.body.quantity))) {
                return res.status(400).send("Quantity Should Be Number");
            }
            variant.quantity = parseInt(req.body.quantity);
        }
        
        if(!Object.keys(variant).length) {
            return res.status(400).send("No Data To Update");
        }
        req.variant = variant;
        next()
    }
}

export default new VariantValidator();
