"use strict";

const moment = require('moment')

class NotificationValidator {
    all = (req, res, next) => {
        if(!req.query.start) {
            return res.status(400).send("Start Time Required in format dd-mm-yyyy");
        }
        if(!req.query.end) {
            return res.status(400).send("End Time Required in format dd-mm-yyyy");
        }
        const startTime = moment(req.query.start, 'DD-MM-YYYY', true);
        if(!startTime.isValid()) {
            return res.status(400).send("Invalid StartTime, Time Required in format dd-mm-yyyy");
        }
        const start = startTime.startOf('day').toDate();

        const endTime = moment(req.query.end, 'DD-MM-YYYY', true);

        if(!endTime.isValid()) {
            return res.status(400).send("Invalid EndTime, Time Required in format dd-mm-yyyy");
        }
        const end = endTime.endOf('day').toDate();

        if(end < start) {
            return res.status(400).send("End Time is less than Start Time");
        }
        req.timestamp = {
            start: start,
            end: end
        }
        next()
    }
}

export default new NotificationValidator();