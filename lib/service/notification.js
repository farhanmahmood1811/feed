"use strict";

import Notification from './../models/notification';
import Constant from '../core/constant';

class NotificationService {
    add = async (activity) => {
        const notifications = await Notification.find({}).sort({modifiedAt: -1}).limit(1).lean();
        if(notifications.length) {
            let notification = notifications[0];
            if(this._validateSimilarActivity(notification, activity)) {
                notification = await this.update(notification._id, activity);
            } else {
                notification = await this.create(activity)
            }
            return notification
        } else {
            const newNotification = await this.create(activity);
            return newNotification;
        }
    }
    create = async (activity) => {
        const notification = new Notification({
            userId: activity.userId,
            activityType: activity.activityType,
            activityIds: [ activity._id ],
            entity: {
                names: [ activity.entity.name ],
                fields: activity.entity.fields || [],
                type: activity.entity.type
            }
        })
        const newNotification = await notification.save()
        return newNotification;
    }
    update = async (notificationId, activity) => {
        const data = {
            $addToSet: {
                'entity.names': [ activity.entity.name ],
                'activityIds': [ activity._id ]
            }
        }
        let notification = await Notification.update({_id: notificationId}, data, {new: true});
        return notification
    }
    transformToMessage = (notifications) => {
        let data = [];
        for(let i=0; i<notifications.length; i++) {
            let info = {
                message: this._generateMessageFromNotification(notifications[i]),
                timestamp: notifications[i].modifiedAt
            }
            data.push(info)
        }
        return data
    }
    _validateSimilarActivity = (notification, activity) => {
        if(notification.userId.toString() != activity.userId.toString()) 
            return false;
        if(notification.entity.type != activity.entity.type)
            return false;
        if(activity.activityType != notification.activityType) 
            return false;
        if(activity.entity.fields.length != notification.entity.fields.length)
            return false;
        if(activity.entity.fields.sort().join(" ") != notification.entity.fields.sort().join(" "))
            return false;
        return true;
    }
    _generateMessageFromNotification = (data) => {
        let entityNames = data.entity.names;
        let lastEntityName = entityNames.pop();
        entityNames = entityNames.length ? `${entityNames.join(', ')} and ${lastEntityName}` : lastEntityName;
        const entityFieldNames = data.entity.fields.length ? `${data.entity.fields.join(', ')} of `: "";
        const entityType = data.activityIds.length > 1 ? `${Constant.entityTypeName[data.entity.type]}s`: Constant.entityTypeName[data.entity.type];
        let msg = `${data.userId.name} ${Constant.activityTypeName[data.activityType]} ${entityFieldNames}${entityType} ${entityNames}`
        return msg;
    }
}

export default new NotificationService();