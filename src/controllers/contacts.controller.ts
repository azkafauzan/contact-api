import { NextFunction, Request, Response } from "express"
import Contact from "../models/contacts.model"
import Errors from "../configs/errors"
import { validationResult } from "express-validator"

export const getAllContacts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contacts = await Contact.find()
    if (!contacts) {
      const err = new Errors("No contacts found", 404)
      next(err)
      return
    }
    res.status(200).json({
      message: "Get all contacts success",
      data: contacts,
    })
  } catch (error: any) {
    const err = new Errors(error.message, 500)
    next(err)
  }
}

export const getContactById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      const err = new Errors("Contact not found", 404)
      next(err)
      return
    }
    res.status(200).json({
      message: "Get contact success",
      data: contact,
    })
  } catch (error: any) {
    const err = new Errors(error.message, 500)
    next(err)
  }
}
export const addContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const err = new Errors(errors.array()[0].msg, 400)
      next(err)
      return
    }
    const dup = await Contact.findOne({ phone: req.body.phone })
    const data = new Contact(req.body)
    if (data.phone === dup?.phone) {
      const err = new Errors("Phone number already exist", 400)
      next(err)
      return
    }
    data.save()
    res.status(201).json({
      message: "Contact created successfully",
      data,
    })
  } catch (error: any) {
    const err = new Errors(error.message, 500)
    next(err)
  }
}

export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const err = new Errors(errors.array()[0].msg, 400)
      next(err)
      return
    }
    const data = await Contact.findByIdAndUpdate(id, req.body)
    if (!data) {
      const err = new Errors("Contact not found", 404)
      next(err)
      return
    }
    data.save()
    res.status(201).json({
      message: "Contact updated successfully",
      data,
    })
  } catch (error: any) {
    const err = new Errors(error.message, 500)
    next(err)
  }
}

export const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const data = await Contact.findByIdAndDelete(id)
    if (!data) {
      const err = new Errors("Contact not found", 404)
      next(err)
      return
    }
    res.status(200).json({
      message: "Contact deleted successfully",
    })
  } catch (error: any) {
    const err = new Errors(error.message, 500)
    next(err)
  }
}
