
import { Module } from "@nestjs/common";
import { ProductosService } from "./Productos.service";
import { ProductosController } from "./Productos.controller";
import { Productos } from "./entities/entity.Productos";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module ({
    controllers: [ProductosController],
    providers: [ProductosService],
    imports: [
        TypeOrmModule.forFeature([Productos])
    ],
    exports: [ProductosService, TypeOrmModule]
})
export class ProductosModule {}