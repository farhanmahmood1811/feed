    
'use strict';

import mongoose from 'mongoose';

let NotificationSchema = mongoose.Schema({
	userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    entity: {
        names: [ {type: String} ],
        fields: [ {type: String} ],
        type: { type: Number }
    },
    activityType: {type: Number, required: true},
    activityIds: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Activity", 
        required: true
    }],
    createdAt: {
		type: Date,
		default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now,
        index: true
    }
});

NotificationSchema.pre('save', async function(next) {
    var item = this;
    item.modifiedAt = new Date();
    next()
});

export default mongoose.model('Notification', NotificationSchema);