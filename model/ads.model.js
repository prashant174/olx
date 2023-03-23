const mongoose=require("mongoose")
const adsSchema=mongoose.Schema({ 
    description:String,
    category:String,
    image:String,
    location:String,
    postDate:Date,
    price:Number

})

const AdsModel=mongoose.model("ads",adsSchema)

module.exports={AdsModel}