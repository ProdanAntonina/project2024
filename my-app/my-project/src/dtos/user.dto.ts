import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsEmail()
    email: string;
}
