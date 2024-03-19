import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Asumiendo que estás utilizando TypeORM
import { Repository } from 'typeorm'; // Asumiendo que estás utilizando TypeORM
import { CreateGamas } from './dto/create-Gamas.dto';
import { UpdateGamas } from './dto/update-Gamas.dto';
import { PaginationDTO } from '../categorias/dto/pagination.dto';
import { Gamas } from './entities/entity';

@Injectable()
export class GamasService {

  constructor(
    @InjectRepository(Gamas)
    private readonly gamaRepository: Repository<Gamas>,
  ) {}

  findOne(codigoGama: string) {
    return this.gamaRepository.findOne({ where: { codigoGama } });
  }
  

  async create(createGamas: CreateGamas) {
    try {
      const codigoGama = this.gamaRepository.create(createGamas);
      await this.gamaRepository.save(codigoGama);
      return {
        msg: 'Gama insertada',
        data: codigoGama,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Ponte en contacto con el administrador');
    }
  }

  //LISTAR UNA GAMA
   async ListarUno(codigoGama: string) {
     try {
       const codigoGama = await this.gamaRepository.findOne({
         where: {  }
       })
       return {
         message: "detalles de la gana",
         data: codigoGama,
         status: 200
       }
     } catch (error) {
       throw new InternalServerErrorException('ERROR')
     }
   }

  //LISTAR TODOS LAS GAMAS
  async findAll() {
    try {
      const gamaData = await this.gamaRepository.find()
      return {
        data: gamaData,
        message: 'listado de todas las gamas',
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException("fallo al listar todos las gamas")
    }
  }


  //  MODIFICAR GAMA

  async UpdateGama(codigoGama: string, updateGamas: UpdateGamas) {
    try {
      const codigoGama = await this.gamaRepository.findOne({
        where: {  }
      })
      this.gamaRepository.merge(codigoGama, updateGamas)
      await this.gamaRepository.save(codigoGama)
      return {
        message: 'gama actualizado',
        data: codigoGama,
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException('fallo al actualizarla gama')
    }
  }


  // BORRAR GAMA

  async remove(codigoGama: string) {
    try {
      const gamaen = await this.gamaRepository.findOneBy({ codigoGama });
      if (!gamaen) {
        throw new NotFoundException(`Gama con el codigo: ${codigoGama} no encontrado`);
      }
      console.log('gama eliminada')
      return await this.gamaRepository.remove(gamaen);
    } catch (error) {
      throw new InternalServerErrorException('fallo al borrar la Gama')
    }
  }

  // PAGINACIÓN
  
  async Paginat(paginationDto: PaginationDTO) {
    const { limit, offset } = paginationDto;
    return this.gamaRepository.find({
      take: limit,
      skip: offset
    });
  }



  // BORRAR TODOS LAS GAMAS
  async deleteAllGamas() {
    const query = this.gamaRepository.createQueryBuilder('codigoGama');
    try {
      return await query
        .delete()
        .where({})
        .execute()
    } catch (error) {
      throw new InternalServerErrorException('Ponte en contacto con el administrador ...')
    }
  }

}
