'use strict';

import mongoose from 'mongoose';

let CounterSchema = mongoose.Schema({
	_id: {
        type: String, 
        required: true
    },
    seq: { 
        type: Number, 
        default: 0 
    }
});

CounterSchema.index({ _id: 1, seq: 1 }, { unique: true })

export default mongoose.model('Counter', CounterSchema);