import {Schema, model} from 'mongoose';

export const promosS = new Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    product:{
        type:String
    },
    sale_off:{
        type:Number
    }
})

export const promosM = new model('promociones', promosS)