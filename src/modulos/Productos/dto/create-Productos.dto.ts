import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateProductos{

    @IsString()
    codigo: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    codgama: string;

    @IsString()
    @MinLength(1)
    proveedor: string;

    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsNumber()
    stock: number;

    @IsNumber()
    pvp: number;

    @IsNumber()
    pcoste: number;

    @IsString()
    @MinLength(1)
    imagen: string;
}