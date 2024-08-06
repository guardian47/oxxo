import { empleadoS } from "./empleados.model.js";
import { model } from "mongoose";

export const gerenteM = new model('gerente', empleadoS)