import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Asumiendo que estás utilizando TypeORM
import { Repository } from 'typeorm'; // Asumiendo que estás utilizando TypeORM
import { CreateProductos } from './dto/create-Productos.dto';
import { UpdateProductos } from './dto/update-Productos.dto';
import { PaginationDTO } from '../categorias/dto/pagination.dto';
import { Productos } from './entities/entity.Productos';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Productos)
    private readonly productoRepository: Repository<Productos>,
  ) {}

  findOne(codigo: string) {
    return this.productoRepository.findOne({ where: { codigo } });
  }
  

  async create(createProductos: CreateProductos) {
    try {
      const producto = this.productoRepository.create(createProductos);
      await this.productoRepository.save(producto);
      return {
        msg: 'Producto insertado',
        data: producto,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Ponte en contacto con el administrador');
    }
  }

  //LISTAR UN PRODUCTO
  async ListarUno(codigo: string) {
    try {
      const producto = await this.productoRepository.findOne({
        where: { codigo }
      })
      return {
        message: "detalles del producto",
        data: producto,
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException('ERROR ._.')
    }
  }

  //LISTAR TODOS LOS PRODUCTOS
  async findAll() {
    try {
      const proData = await this.productoRepository.find()
      return {
        data: proData,
        message: 'listado de todos los productos',
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException("fallo al listar todos los productos")
    }
  }


  //  MODIFICAR PRODUCTO

  async UpdateProducto(codigo: string, updateProductos: UpdateProductos) {
    try {
      const Producto = await this.productoRepository.findOne({
        where: { codigo }
      })
      this.productoRepository.merge(Producto, updateProductos)
      await this.productoRepository.save(Producto)
      return {
        message: 'producto actualizado',
        data: Producto,
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException('fallo al actualizar el producto')
    }
  }


  // BORRAR PRODUCTO

  async remove(codigo: string) {
    try {
      const proen = await this.productoRepository.findOneBy({ codigo });
      if (!proen) {
        throw new NotFoundException(`Producto con el codigo: ${codigo} no encontrado`);
      }
      console.log('producto eliminado')
      return await this.productoRepository.remove(proen);
    } catch (error) {
      throw new InternalServerErrorException('fallo al borrar el producto')
    }
  }

  // PAGINACIÓN
  
  async Paginat(paginationDto: PaginationDTO) {
    const { limit, offset } = paginationDto;
    return this.productoRepository.find({
      take: limit,
      skip: offset
    });
  }



  // BORRAR TODOS LOS PRODUCTOS
  async deleteAllProductos() {
    const query = this.productoRepository.createQueryBuilder('producto');
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
