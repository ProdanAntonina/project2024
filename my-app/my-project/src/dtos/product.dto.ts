import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { CategoryDTO } from './category.dto';

export class ProductDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    category: CategoryDTO;
}
