import mongoose from "mongoose";
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import testempleado from "./Backend/controllers/empleados.controller.js";
import testgerente from "./Backend/controllers/gerente.controller.js";
import testproductos from "./Backend/controllers/producto.controller.js";
import testproductF from "./Backend/controllers/productosF.controller.js";
import testpromos from "./Backend/controllers/promos.controller.js";
import testdescuentos from "./Backend/controllers/descuentos.controller.js";
dotenv.config()

mongoose.connect(process.env.url)
.then(()=>{
    console.log('Se conecto con la base de datos')
})
.catch((err)=>{
    console.log('nose conecto a la base ', err)
})

const app = express()
app.use(cors())

app.listen(4002,()=>{
    console.log('El servidor esta funcionando')
})

testempleado()
testgerente()
testproductos()
testproductF()
testpromos()
testdescuentos()
