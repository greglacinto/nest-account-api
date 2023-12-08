import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class AccountDto {
    @ApiProperty({example: '5300018123', required: true})
    @MinLength(10)
    @IsNotEmpty()
    accountNumber: string
}