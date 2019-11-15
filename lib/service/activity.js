"use strict";

import Activity from '../models/activity';
import NotificationService from './notification';

class ActivityService {
    add = async (userId, activityType, entity) => {
        entity.fields = entity.fields || []
        const activity = new Activity({
            userId: userId,
            activityType: activityType,
            entity: entity
        })
        await activity.save();
        await NotificationService.add(activity);
        return activity;
    }
}

export default new ActivityService();