import { productosfM } from "../models/productosF.model.js";

const test = ()=>{
    console.log('Se esta llamando a productos faltantes')
}

productosfM.create({
    name:'Coca-cola',
    quantity: 12,
    description: 'bebida azucarada'
})

export default test;