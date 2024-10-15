import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 250 })
    name: string;

    @Column({type: 'varchar', length: 250})
    email: string;

    @Column({type: 'varchar', length: 100})
    password: string;

    @Column()
    createdAt: Date ;

}
