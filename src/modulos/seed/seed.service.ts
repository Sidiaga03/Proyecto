import { Injectable } from "@nestjs/common";
import { ProductosService } from "../Productos/Productos.service";
import { GamasService } from "../Gamas/Gamas.service";
import { CreateProductos } from "../Productos/dto/create-Productos.dto";
import { CreateGamas } from "../Gamas/dto/create-Gamas.dto";
import * as SeedProductos from './data/productos.json';
import * as SeedGamas from './data/gamas.json';
import { Gamas } from "../Gamas/entities/entity";
import { Productos } from "../Productos/entities/entity.Productos";

@Injectable ()
export class SeedService {

  constructor(
      private readonly productosService: ProductosService,
      private readonly gamasService: GamasService
    ){}

    public async loadData(){
      await this.insertNewProductos();
      await this.insertNewGamas();
  }

  private async insertNewProductos(){
    await this.productosService.deleteAllProductos();
    const insertPromiseProductos = [];
    const results = await Promise.all(insertPromiseProductos);
    return true;
  }

  private async insertNewGamas(){
    await this.gamasService.deleteAllGamas();
    const insertPromiseGamas = [];
    const results = await Promise.all(insertPromiseGamas);
    return true;
  }
}