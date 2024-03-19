import { Productos } from '../../Productos/entities/entity.Productos'
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Categoria {
    
    @PrimaryColumn('text',{
        nullable: false,
    }) 
    catid: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    nombre: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    desc: string;
}
