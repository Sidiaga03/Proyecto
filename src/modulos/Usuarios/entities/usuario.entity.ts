
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    userid: string;

    @Column('text', { unique: true })
    dniuser: string;

    @Column('text', { unique: true })
    nombre: string;

    @Column('text')
    username: string;

    @Column('text')
    contraseña?: string;
    
    @Column('text')
    email: string;
    
}
