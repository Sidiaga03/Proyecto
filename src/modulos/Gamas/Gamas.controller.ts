import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GamasService } from './Gamas.service';
import { CreateGamas } from './dto/create-Gamas.dto';
import { UpdateGamas } from './dto/update-Gamas.dto';
import { PaginationDTO } from '../categorias/dto/pagination.dto';

@Controller('gamas')
export class GamasController {
  constructor(private readonly gamasService: GamasService) {}

  // INSERTAR
  @Post()
  create(@Body() createGamas: CreateGamas) {
    console.log('gama creada')
    return this.gamasService.create(createGamas);
  }

  // LISTAR TODOS
  @Get('listar')
  findAll() {
    return this.gamasService.findAll();
  }

  // LISTAR UNO
  @Get(':codigoGama')
  ListarUno(@Param('codigoGama') codigoGama: string) {
    return this.gamasService.ListarUno(codigoGama);
  }

  // MODIFICAR
  @Patch(':codigoGama')
  update(@Param('codigoGama') codigoGama: string, @Body() UpdateGamas: UpdateGamas) {
    return this.gamasService.UpdateGama(codigoGama, UpdateGamas);
  }

  // BORRAR
  @Delete(':codigoGama')
  remove(@Param('codigoGama') codigoGama: string) {
    return this.gamasService.remove(codigoGama);
  }

  // PAGINACIÓN
  @Get()									
  Paginat(@Query() paginationDto: PaginationDTO) {
      console.log(paginationDto);
      return this.gamasService.Paginat(paginationDto);
  }
}
