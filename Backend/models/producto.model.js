import { Schema,model } from "mongoose";

export const productosS = new Schema({
    name:{
        type:String
    },
    quantity:{
        type:Number
    },
    description:{
        type:String
    }
})

export const productosM = new model('productos', productosS)