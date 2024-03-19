import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Gamas {

    @PrimaryColumn('text',{
        unique: true,
        nullable: false,
    }) 
    codigoGama: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    descripcion: string;

    @Column({
        unique: false,
        nullable: true,
    })
    imagen: string;
}
