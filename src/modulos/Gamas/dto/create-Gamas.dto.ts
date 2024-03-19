import { IsString, MinLength } from "class-validator";

export class CreateGamas{

    @IsString()
    @MinLength(1)
    codigoGama: string;

    @IsString()
    @MinLength(1)
    descripcion: string;

    @IsString()
    @MinLength(1)
    imagen: string;
}