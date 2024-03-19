import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { ClientesService } from '../Clientes/clientes.service';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepositorio: Repository<Usuario>,
    private readonly clienteService: ClientesService
  ){

  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      console.log(createUsuarioDto);
      const { idCliente, ...camposUsuario } = createUsuarioDto;
      const usuario = this.usuarioRepositorio.create({...camposUsuario});
      const cliente = await this.clienteService.findOne(idCliente);
      await this.usuarioRepositorio.save(usuario);

      return usuario
    } catch(error){
        return new InternalServerErrorException('Error en BD')
    }
    
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(userid: number) {
    return `This action returns a #${userid} user`;
  }

  update(userid: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${userid} user`;
  }

  remove(userid: number) {
    return `This action removes a #${userid} user`;
  }
}
