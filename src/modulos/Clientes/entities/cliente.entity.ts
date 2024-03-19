import { BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryColumn()
    nif: string;

    @Column('text', { unique: true} )
    nombre: string;

    @Column('text', { unique: true })
    apellidos: string;

    @Column('text', { nullable: true })
    direccion: string;

    @Column('text', { nullable: true })
    provincia: string;

    @Column('text',{ nullable: true })
    localidad: string;}

