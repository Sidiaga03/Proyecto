import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':userid')
  findOne(@Param('userid') userid: string) {
    return this.usuarioService.findOne(+userid);
  }

  @Patch(':userid')
  update(@Param('userid') userid: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+userid, updateUsuarioDto);
  }

  @Delete(':userid')
  remove(@Param('userid') userid: string) {
    return this.usuarioService.remove(+userid);
  }
}
