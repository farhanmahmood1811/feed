"use strict";

let Constant = {};

Constant.paging = {
    "item": 10,
    "variant": 10,
    "notification": 100
}

Constant.entityType = {
    "item": 1,
    "variant": 2
}
Constant.entityTypeName = {
    1: "item",
    2: "variant"
}

Constant.activityType = {
    "created": 1,
    "edited": 2,
    "deleted": 3
}
Constant.activityTypeName = {
    1: "created",
    2: "edited",
    3: "deleted"
}

Constant.jwt = {
    secret: "dummys3cr3t",
    expiresIn: '1d'
}

export default Constant;