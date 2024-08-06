import { descuentoM } from "../models/descuentos.model.js";

const test = ()=>{
    console.log('Se esta llamando a descuentos')
}
descuentoM.create({
    name:'sale papas a mitad de precio',
    type:'descuento',
    product:'papas fritas',
    sale_off:12
})

export default test;