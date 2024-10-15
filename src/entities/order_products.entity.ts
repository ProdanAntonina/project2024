import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

Entity()
export class OrderProducts {
    @PrimaryGeneratedColumn()
    id: number;

    /*@Column()
    order_id: number;
    */

    /* @Column()
    product_id: number;
    */

    @Column()
    quantity: number;
}