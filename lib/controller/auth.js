"use strict";

import User from '../models/user';
import TokenService from '../service/token';

class AuthController {
	register = async (req, res, next) => {
        try {
        	let user = new User(req.body);
        	user.isNew = true;
        	await user.save();
        	return res.status(201).send("User Created successfully")
        } catch(err) {
          	next(err);
        }
    }
    login = async (req, res, next) => {
    	try {
				let user = await User.findOne({username: req.body.username, password: req.body.password});
    		if(!user) {
    			return res.status(401).send('Authentication failed. Invalid Username.');
    		}
				return res.status(200).send({name: user.name, token: `Bearer ${user._id}`});
    	} catch(err) {
    		next(err);
    	}
    }
}

export default new AuthController()