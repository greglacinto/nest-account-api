import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class DisableAccountDto {
    @ApiProperty({example: 'R00000021', required: true})
    @IsNotEmpty()
    cifId: string
}