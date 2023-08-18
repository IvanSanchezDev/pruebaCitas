import express from 'express'
import dotenv from 'dotenv'
import { appToken } from './helpers/jwt.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/token', appToken)

const port = 1234 ?? process.env.PORT

app.listen(port, () => {
  console.log(`server listening in http://localhost:${port}`)
})
