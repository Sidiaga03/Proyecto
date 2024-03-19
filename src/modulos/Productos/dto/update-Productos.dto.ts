import { PartialType } from "@nestjs/mapped-types";
import { CreateProductos } from "./create-Productos.dto";

export class UpdateProductos extends PartialType(CreateProductos) {}
