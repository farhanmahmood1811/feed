'use strict';

import mongoose from 'mongoose';

let VariantSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true
    },
	sellingPrice: {
		type: Number,
		required: true
	},
	costPrice: {
        type: Number,
		required: true
    },
    properties: {
        type: String,
		required: true
    },
    quantity: {
        type: Number,
        required: true
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

VariantSchema.pre('save', function(next) {
	let variant = this;
    variant.modifiedAt = new Date();
    next()
});

export default mongoose.model('Variant', VariantSchema);
