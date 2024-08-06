import { promosS } from "./promos.model.js";
import { model } from "mongoose";

export const descuentoM = new model('descuentos', promosS)