'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		lowercase: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

// UserSchema.pre('save', function(next) {
// 	var user = this;
// 	if (this.isNew) {
// 		console.log("Called")
// 		bcrypt.genSalt(10, function(err, salt) {
// 			if (err) {
// 				return next(err);
// 			}
// 			bcrypt.hash(user.password, salt, function(err, hash) {
// 				if (err) {
// 					return next(err);
// 				}
// 				user.password = hash;
// 				next();
// 			});
// 		});
// 	} else {
// 		return next();
// 	}
// });

// UserSchema.methods.comparePassword = function(password) {
// 	return bcrypt.compareSync(password, this.password)
// };

export default mongoose.model('User', UserSchema);
