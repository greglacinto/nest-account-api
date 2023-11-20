import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class EnableAccountDto {

    @ApiProperty({example: 1400177535, required: true})
    @IsNotEmpty()
    foracid: number
}