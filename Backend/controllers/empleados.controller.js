import { empleadoM } from "../models/empleados.model.js";

const test =()=>{
    console.log('Se esta llamando a empleados')
}

empleadoM.create({
    first_name:'Carlos Daniel',
    last_name:'Gtz Novoa',
    age:20,
    puesto:'Cajero'
})

export default test;