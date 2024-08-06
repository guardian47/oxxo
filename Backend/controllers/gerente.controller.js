import { gerenteM } from "../models/gerente.model.js";

const test =()=>{
    console.log('Se esta llamando gerente')
}

gerenteM.create({
    first_name:'Daniel',
    last_name:'Zavala Lozano',
    age:50,
    puesto:'Gerencia'
})

export default test;