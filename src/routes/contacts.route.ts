import express from "express"
import { addContact, deleteContact, getAllContacts, getContactById, updateContact } from "../controllers/contacts.controller"
import contactsValidation from "../validations/contacts.validation"
const router = express.Router()

router.get("/", getAllContacts)
router.post("/", contactsValidation, addContact)
router.get("/:id", getContactById)
router.put("/:id", contactsValidation, updateContact)
router.delete("/:id", deleteContact)

export default router
