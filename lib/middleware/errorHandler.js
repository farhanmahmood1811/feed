"use strict";

const ErrorHandler = (err, req, res, next) => {
  if (!err) {
    return res.sendStatus(500);
  }

  res.status(err.status || 500).json({"message": err.message || "Oops Something went wrong !!"});
}

export default ErrorHandler;
