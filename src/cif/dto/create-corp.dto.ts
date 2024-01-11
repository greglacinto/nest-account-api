import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, MaxLength } from "class-validator";


export class CreateCorpDto {
    @ApiProperty({example: 'TEST STREET', required: true})
    @IsNotEmpty()
    street: string

    @ApiProperty({
        example: '0532', required: true
    })
    @IsNotEmpty()
    cityCode: string;

    @ApiProperty({
        example: 'NG', required: true
    })
    @IsNotEmpty()
    countryCode: string;

    @ApiProperty({
        example: '36', required: true
    })
    @IsNotEmpty()
    stateCode: string;

    @ApiProperty({
        example: '234', required: true
    })
    @IsNotEmpty()
    zipCode: string;
    
    @ApiProperty({
        example: '02O2INNOVATIONS LAB NIG LTD', required: true
    })
    @IsNotEmpty()
    corpName: string;

    @ApiProperty({
        example: '2022-08-19', required: true
    })
    @IsNotEmpty()
    incorpDate: string;

    @ApiProperty({
        example: 'CORP KEY CONTACT NAME', required: true
    })
    keyContactPerson: string

    @ApiProperty({
        example: 'HL1', required: true
    })
    @IsNotEmpty()
    healthDesc: string;

    @ApiProperty({
        example: 'LMLTD', required: true
    })
    @IsNotEmpty()
    legalEntityType: string;

    @ApiProperty({
        example: 'HINPE', required: true
    })
    @IsNotEmpty()
    entityClass: string;

    @ApiProperty({
        example: 'TVO2111040', required: true
    })
    @IsNotEmpty()
    createdBy: string;

    @ApiProperty({
        example: 'HLC01', required: true
    })
    @IsNotEmpty()
    custHealthCode: string;

    @ApiProperty({
        example: 20000000, required: true
    })
    @IsNotEmpty()
    @IsNumber()
    aveAnnualIncome: number;

    @ApiProperty({
        example: '187', required: true
    })
    @IsNotEmpty()
    primServiceCenter: string;

    @ApiProperty({
        example: 0, required: true
    })
    @IsNotEmpty()
    @IsNumber()
    phoneCityCode: number

    @ApiProperty({
        example: 234, required: true
    })
    @IsNotEmpty()
    @IsNumber()
    phoneCountryCode: number

    @ApiProperty({
        example: 8122232345, required: true
    })
    @IsNotEmpty()
    @IsNumber()
    phoneLocalCode: number

    @ApiProperty({
        example: 'test@gmail.com', required: true
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'RT187OF01', required: true
    })
    @IsNotEmpty()
    primRmId: string;

    @ApiProperty({
        example: 'TTA2206017', required: true
    })
    @IsNotEmpty()
    relCreatedBy: string;

    @ApiProperty({
        example: '2022-08-19', required: true
    })
    @IsNotEmpty()
    relStartDate: string;

    @ApiProperty({
        example: 'CUSTOMER SHORT NAME', required: true
    })
    @IsNotEmpty()
    @MaxLength(10)
    shortName: string;

    @ApiProperty({
        example: 'RC1965167', required: true
    })
    @IsNotEmpty()
    regNumber: string;

    @ApiProperty({
        example: '311167790001', required: true
    })
    @IsNotEmpty()
    taxId: string;

    @ApiProperty({
        example: 'NG', required: true
    })
    @IsNotEmpty()
    principlePlaceOperation: string;

    @ApiProperty({
        example: 'NG', required: true
    })
    @IsNotEmpty()
    docCountryOfIssue: string;

    @ApiProperty({
        example: 'RC1965167', required: true
    })
    @IsNotEmpty()
    docRefNumber: string;

    @ApiProperty({
        example: '2010-01-01', required: true
    })
    @IsNotEmpty()
    docIssDate: string;

    @ApiProperty({
        example: '0220', required: true
    })
    @IsNotEmpty()
    docPlaceofIssueCode: string;

    @ApiProperty({
        example: 'NGN', required: true
    })
    @IsNotEmpty()
    custCrncyCode: string;

}