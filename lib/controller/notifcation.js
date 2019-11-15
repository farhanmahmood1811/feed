"use strict";

import Notification from '../models/notification';
import NotificationService from '../service/notification';

class NotificationController {
    all = async (req, res, next) => {
        try {
            let query = {
                "modifiedAt": {'$gte': req.timestamp.start, '$lte': req.timestamp.end}
            };
            if(req.query.userId) {
                query['userId'] = req.query.userId;
            }
            let notifications = await Notification.find(query)
                .populate({path:'userId', select:'name'})
                .sort({modifiedAt: -1}).lean();
            let response = {};
            if( notifications.length == this.limit ) {
                let nextNotifcation = notifications.pop();
                response.nextId = nextNotifcation._id;
            }
            response.notifications = NotificationService.transformToMessage(notifications);
            return res.status(200).send(response)
        } catch(err) {
          	next(err);
        }
    }
}

export default new NotificationController();