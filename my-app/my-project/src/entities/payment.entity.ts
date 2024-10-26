import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';


@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    payment_method: string;

    @Column({ type: 'varchar', length: 50 })
    payment_status: string;

    @Column()
    payment_date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_price: number;

    @ManyToOne(() => Order, (order) => order.payments)
    order: Order;

}
