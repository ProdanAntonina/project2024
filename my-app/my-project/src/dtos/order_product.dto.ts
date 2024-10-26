import { IsNotEmpty, IsNumber } from 'class-validator';
import { ProductDTO } from './product.dto';

export class OrderProductDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    product: ProductDTO;
}
