import { productosM } from "../models/producto.model.js";
const test = ()=>{
    console.log('Se esta llamando a productos')
}
productosM.create({
    name:'Papas fritas',
    quantity: 30,
    description:'Papas fritas de sabritas'
})

export default test;