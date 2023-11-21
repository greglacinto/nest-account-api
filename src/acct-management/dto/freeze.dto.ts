import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";

export class FreezeAccountDto {

    @ApiProperty({example: 1002343123, required: true})
    @IsNotEmpty()
    foracid: number

    @ApiProperty({example: 'CUSTOMER REQUEST', required: true})
    @IsNotEmpty()
    freezeDescription: string

    @ApiProperty({example: '065', required: true})
    @IsNotEmpty()
    freezeReasonCode: string
}