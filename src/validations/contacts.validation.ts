import { body } from "express-validator"

const contactsValidation = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("phone").notEmpty().withMessage("Phone cannot be empty").isMobilePhone("id-ID").withMessage("Phone must be a valid Indonesian phone number"),
  body("email").isEmail().withMessage("Email must be a valid email address"),
]

export default contactsValidation
