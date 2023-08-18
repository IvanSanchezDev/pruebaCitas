import express from 'express'


const app=express()


app.use(express.json())


const port=process.env.port ?? 1234


app.listen(port, ()=>{
    console.log(`server listening in http://localhost:${port}/`);
})