import { Request, Response, NextFunction } from "express"
import Errors from "../configs/errors"

const error = (err: Errors, req: Request, res: Response, next: NextFunction) => {
  const { statusCode = 500, message = "something went wrong", status } = err
  res.status(statusCode).json({
    status: status || "error",
    message,
  })
}

export default error
