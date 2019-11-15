'use strict';

import mongoose from 'mongoose';
import Counter from './counter';

let ItemSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		lowercase: true,
		required: true
	},
	category: {
        type: String,
        lowercase: true,
		required: true
    },
    productCode: {
        type: Number,
        unique: true
    },
	createdAt: {
		type: Date,
		default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

ItemSchema.pre('save', async function(next) {
    var item = this;
    let counter;
    try {
        counter = await Counter.findByIdAndUpdate({_id: "item"}, {$inc: {seq:1}}, {upsert: true, new: true})
    } catch(e) {
        return next(e);
    }
    item.productCode = counter.seq;
    item.modifiedAt = new Date();
    next()
});

export default mongoose.model('Item', ItemSchema);