import { Request, Response, NextFunction } from "express"
import Errors from "../configs/errors"

const error = (err: Errors, req: Request, res: Response, next: NextFunction) => {
  const { statusCode = 500, message = "something went wrong" } = err
  res.status(statusCode).json({
    message,
  })
}

export default error
