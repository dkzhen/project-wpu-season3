import express from "express"

const app = express()

app.get("/",async (req,res)=>{
    res.send("App running on port 3000")
})

app.listen(3000)