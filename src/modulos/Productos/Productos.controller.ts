import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductosService } from './Productos.service';
import { CreateProductos } from './dto/create-Productos.dto';
import { UpdateProductos } from './dto/update-Productos.dto';
import { PaginationDTO } from '../categorias/dto/pagination.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  // INSERTAR
  @Post()
  create(@Body() createProductos: CreateProductos) {
    console.log('Producto creado')
    return this.productosService.create(createProductos);
  }

  // LISTAR TODOS
  @Get('listar')
  findAll() {
    return this.productosService.findAll();
  }

  // LISTAR UNO
  @Get(':codigo')
  ListarUno(@Param('codigo') codigo: string) {
    return this.productosService.ListarUno(codigo);
  }

  // MODIFICAR
  @Patch(':codigo')
  update(@Param('codigo') codigo: string, @Body() updateProductos: UpdateProductos) {
    return this.productosService.UpdateProducto(codigo, updateProductos);
  }

  // BORRAR
  @Delete(':codigo')
  remove(@Param('codigo') codigo: string) {
    return this.productosService.remove(codigo);
  }

  // PAGINACIÓN
  @Get()									
  Paginat(@Query() paginationDto: PaginationDTO) {
      console.log(paginationDto);
      return this.productosService.Paginat(paginationDto);
  }
}
