import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSavingsDto {
    @ApiProperty({
        example: 'R00000001', required: true
    })
    @IsNotEmpty()
    cifId: string;

    @ApiProperty({
        example: 'SBALLA', required: true
    })
    @IsNotEmpty()
    schmCode: string;

    @ApiProperty({
        example: 'SBA', required: true
    })
    @IsNotEmpty()
    schmType: string;

    @ApiProperty({
        example: 'NGN', required: true
    })
    @IsNotEmpty()
    acctCrncy: string;

    @ApiProperty({
        example: 'Test Account', required: true
    })
    @IsNotEmpty()
    acctName: string;

    @ApiProperty({
        example: 'TestAcc', required: true
    })
    @IsNotEmpty()
    acctShortName: string;

    @ApiProperty({
        example: '29050', required: true
    })
    @IsNotEmpty()
    glSubHeadCode: string;
    
    @ApiProperty({
        example: '999', required: true
    })
    @IsNotEmpty()
    branchId: string;
}