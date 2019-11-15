'use strict';

import Constant from "../core/constant";
import User from '../models/user';


class TokenService {
    verify = async (token) => {
        const data = await User.findOne({_id: token})
        // const data = jwt.verify(token, Constant.jwt.secret)
        return data;
    }
    generate = (user) => {
        const username = user.username;
        const _id = user._id;
        const data = {
            username,
            _id
        }
        const token = jwt.sign(data, Constant.jwt.secret, {expiresIn: Constant.jwt.expiresIn})
        return token;
    }
}

export default new TokenService();