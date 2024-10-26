import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
}
