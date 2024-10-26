import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class PaymentDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsDate()
    paymentDate: Date;
}
