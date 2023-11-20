import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsNotEmpty, MaxLength, MinLength } from "class-validator";

const gender: string[] = ['M', 'F']

export class CreateMinorDto {
    @ApiProperty({
        example: 'TEST', required: true
    })
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        example: 'TESTMIDDLE', required: true
    })
    @IsNotEmpty()
    middleName: string;

    @ApiProperty({
        example: 'TESTLAST', required: true
    })
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({
        example: 'TEST', required: true
    })
    @IsNotEmpty()
    prefName: string;

    @ApiProperty({
        example: 'TEST STREET', required: true
    })
    @IsNotEmpty()
    streetName: string;
    
    @ApiProperty({
        example: '0220', required: true
    })
    @IsNotEmpty()
    cityCode: string;

    @ApiProperty({
        example: 'LAGOS ISLAND', required: true
    })
    @IsNotEmpty()
    town: string;

    @ApiProperty({
        example: 'NG', required: true
    })
    @IsNotEmpty()
    countryCode: string;
    
    @ApiProperty({
        example: '43', required: true
    })
    @IsNotEmpty()
    houseNumber: string;

    @ApiProperty({
        example: '15', required: true
    })
    @IsNotEmpty()
    stateFinacleCode: string;

    @ApiProperty({
        example: '234', required: true
    })
    @IsNotEmpty()
    postalCode: string;

    @ApiProperty({
        example: '01', required: true
    })
    @IsNotEmpty()
    birthDt: string;

    @ApiProperty({
        example: '01', required: true
    })
    @IsNotEmpty()
    birthMt: string;

    @ApiProperty({
        example: '1990', required: true
    })
    @IsNotEmpty()
    birthYr: string;

    @ApiProperty({
        example: 'TVO2111040', required: false
    })
    createdBy: string;

    @ApiProperty({
        example: 'M', required: true
    })
    @IsNotEmpty()
    @IsIn(gender)
    gender: string;

    @ApiProperty({
        example: 'RT035OF04', required: false
    })
    manager: string;

    @ApiProperty({
        example: '0', required: true
    })
    @IsNotEmpty()
    phoneCityCode: string

    @ApiProperty({
        example: '234', required: true
    })
    @IsNotEmpty()
    phoneCountryCode: string

    @ApiProperty({
        example: '8122232345', required: true
    })
    @IsNotEmpty()
    @MaxLength(10)
    @MinLength(10)
    phoneLocalCode: string

    @ApiProperty({
        example: 'test@gmail.com', required: true
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '999', required: true
    })
    @IsNotEmpty()
    primarySolId: string;

    @ApiProperty({
        example: 'SM002TL01', required: false
    })
    secondaryRMId: string;

    @ApiProperty({
        example: 'NG', required: true
    })
    @IsNotEmpty()
    nationality: string;

    @ApiProperty({
        example: 'NG', required: true
    })
    @IsNotEmpty()
    docCountryOfIssue: string;

    @ApiProperty({
        example: 'NATID', required: true
    })
    @IsNotEmpty()
    docCode: string;

    @ApiProperty({
        example: '2099-01-02', required: true
    })
    @IsNotEmpty()
    docExDate: string;

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
        example: '12345', required: true
    })
    @IsNotEmpty()
    docRefNumber: string;

    @ApiProperty({
        example: 'NGN', required: false
    })
    custCrncyCode: string;

    @ApiProperty({
        example: 'TEST GUARDIAN', required: true
    })
    @IsNotEmpty()
    guardianName: string;

    @ApiProperty({
        example: 'OTHER', required: true
    })
    @IsNotEmpty()
    guardianCode: string;

    @ApiProperty({
        example: 'R3288179', required: true
    })
    @IsNotEmpty()
    guardianCif: string;

}