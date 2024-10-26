import { IsNotEmpty, IsDate } from 'class-validator';
import { UserDTO } from './user.dto';
import { OrderProductDTO } from './order_product.dto';
import { PaymentDTO } from './payment.dto';

export class OrderDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsDate()
    orderDate: Date;

    user: UserDTO;

    orderProducts: OrderProductDTO[];

    payments: PaymentDTO[];
}
