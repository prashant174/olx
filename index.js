const express=require("express")
const {connection}=require("./config/db")
const {productRouter}=require("./routes/product.routes")
require("dotenv").config()

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("working")
})


app.use("/api",productRouter)

port=process.env.PORT||8000
app.listen(port,async()=>{
    try{
        await connection
        console.log("mongo connection successfull")

    }catch(err){
        console.log(err)
    }
    console.log(`server running on ${port}`)
})