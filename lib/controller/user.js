"use strict";

import User from '../models/user';

class UserController {
	all = async (req, res, next) => {
        try {
			const users = await User.find({}, {name: 1, _id: 1})
			return res.status(200).send({users: users})
        } catch(err) {
          	next(err);
        }
    }
}

export default new UserController()