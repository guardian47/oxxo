import { Schema,model } from "mongoose";

export const empleadoS= new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    age:{
        type:Number
    },
    puesto:{
        type:String
    }
    
})

export const empleadoM = new model('empleados', empleadoS)