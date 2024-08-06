import { productosS } from "./producto.model.js";
import { model } from "mongoose";

export const productosfM = new model('productos faltantes', productosS)