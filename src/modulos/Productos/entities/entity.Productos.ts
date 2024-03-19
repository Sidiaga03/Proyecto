
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Productos {

    @PrimaryColumn('text',{
        nullable: false,
    }) 
    codigo: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    nombre: string;

    @Column('text',{
        unique: false,
        nullable: true,
    })
    codgama: string;

    @Column({
        unique: false,
        nullable: true,
    })
    proveedor: string;

    @Column({
        unique: false,
        nullable: true,
    })
    descripcion: string;

    @Column({
        unique: false,
        nullable: true,
    })
    stock: number;

    @Column({
        unique: false,
        nullable: true,
    })
    pvp: number;

    @Column({
        unique: false,
        nullable: true,
    })
    pcoste: number;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    imagen: string;
}
