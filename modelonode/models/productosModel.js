const mongoose = require("../config/mongodb")

const productsSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"El campo es obligatorio"],
        minLength:3
    },
    price:{
        type:Number,
        required:[true,"El campo es obligatorio"],
        min:[0,"El precio debe ser mayor a 0"],
        get: function(value){
            return value * 1.21
        },
         set: function(value){
            return value * 1.21
        }
    },
    name:String,
    price:Number,
    description:String,
    quantity:Number,
    codigo:String,
    category:String
})

productsSchema.virtual("price_currency").get(function(){
    return `$ ${this.price}`
})

productsSchema.set("toJSON",{getters:true,setters:true,virtuals:true})

module.exports = mongoose.model("productos",productsSchema)