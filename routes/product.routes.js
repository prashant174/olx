const express=require("express")

const {AdsModel}=require("../model/ads.model")
const productRouter=express.Router()

productRouter.get("/products",async(req,res)=>{
   try{
    const adsData=await AdsModel.find()
    res.send(adsData)
   }
   catch(err){
    res.send({"msg":"something went wrong"})
   }
})

productRouter.post("/addProduct",async(req,res)=>{
    const payload=req.body
    try{
        const add=new AdsModel(payload)
        await add.save()
        res.status(201).send({"msg":"added successfully"})

    }catch(err){
        res.status(500).send({"msg":"something went wrong"})
    }
})
productRouter.get("/Category",async(req,res)=>{
    const query=req.query
    try{
const category= await AdsModel.find(query)
res.send(category)
    }catch(err){
        res.status(500).send({"msg":"something went wrong"})
    }
})

productRouter.get("/searchByname",async(req,res)=>{
    const query=req.query
    try{
const product= await AdsModel.find(query)
res.send(product)
    }catch(err){
        res.status(500).send({"msg":"something went wrong"})
    }
})

productRouter.get("/sortByDate",async(req,res)=>{
    try{
        const products= await AdsModel.find().sort({postDate:-1})
        res.status(201).send(products)

    }catch(err){
        res.status(500).send({"msg":"something went wrong"})
    }
})

module.exports={productRouter}