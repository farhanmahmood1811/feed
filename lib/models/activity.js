'use strict';

import mongoose from 'mongoose';

let ActivitySchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
    },
    activityType: {
        type: Number,
        required: true
    },
    entity: {
        id: { type: mongoose.Schema.Types.ObjectId, required: true},
        type: { type: Number, required: true },
        name: { type: String, required: true },
        fields: []
    },
    createdAt: {
		type: Date,
		default: Date.now
    }
});

export default mongoose.model('Activity', ActivitySchema);