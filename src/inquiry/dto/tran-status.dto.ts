import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, Matches, MinLength } from "class-validator";


export class TranStatusDto {
    @ApiProperty({example: 'M4', required: true})
    @MinLength(2)
    @IsNotEmpty()
    tranId: string

    @ApiProperty({example: '2023-12-04', required: true})
    @IsNotEmpty()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'Incorrect date format'
    })
    tranDate: string
}