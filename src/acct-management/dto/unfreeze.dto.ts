import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UnfreezeAccountDto {

    @ApiProperty({example: 1002343123, required: true})
    @IsNotEmpty()
    foracid: number
}