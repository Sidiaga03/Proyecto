import { Module } from '@nestjs/common';
import {  UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { ClientesModule } from '../Clientes/clientes.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: 
    [ 
      TypeOrmModule.forFeature([Usuario]),
      ClientesModule
    ],
   
})
export class UsuarioModule {}
