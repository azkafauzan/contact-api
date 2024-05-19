import express, { Application } from "express"
import routerContacts from "./routes/contacts.route"
import middlewares from "./middlewares"
import error from "./middlewares/error"
import "./configs/env"
import "./configs/database"

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(middlewares)
app.use("/api/contacts", routerContacts)
app.use(error)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
