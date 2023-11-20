import { ApiProperty } from "@nestjs/swagger"
import { IsIn, IsNotEmpty } from "class-validator"

const typeOfEntity: string[] = ['RetailCustomer', 'CorporateCustomer']

export class VerifyCifDto{
    @ApiProperty({
        example: 'R00000009',
        required: true
    })
    @IsNotEmpty()
    cifId: string

    @ApiProperty({
        example: 'Approve',
        required: true
    })
    @IsNotEmpty()
    decision: string

    @IsIn(typeOfEntity)
    @ApiProperty({
        example: 'RetailCustomer',
        required: true
    })
    @IsNotEmpty()
    entityType: string
}