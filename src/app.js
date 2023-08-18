import express from 'express'
import dotenv from 'dotenv'

dotenv.config()


const app=express()


app.use(express.json())


const port=1234 ?? process.env.PORT


app.listen(port, ()=>{
    console.log(`server listening in http://localhost:${port}/`);
})