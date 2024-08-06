import { promosM } from "../models/promos.model.js";

const test = ()=>{
    console.log('Se esta llamando a ptomos')
}
promosM.create({
    name:'2x1 en chelas',
    type:'cumulo',
    product:'cerveza',
    sale_off: 30
})
export default test;
