import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { OrderProduct } from './order_products.entity';
import { Payment } from './payment.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderDate: Date;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
    orderProducts: OrderProduct[];

    @OneToMany(() => Payment, (payment) => payment.order)
    payments: Payment[];
}
