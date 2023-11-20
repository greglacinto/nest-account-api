import { MinorCust } from "../interface/minorcust.interface";

export class MinorCustFI {
  requestBody: MinorCust 

  requestTime = new Date().toISOString()
  fullName    = ''
  dob         = ''
  PhoneNum    = ''
  salutation  = ''

  constructor(payload: MinorCust){
    this.requestBody =  payload;

    if (this.requestBody.gender == 'M') {
        this.salutation = 'MR.'
    } else {
        this.salutation = 'MISS'
    }

    this.fullName = `${this.requestBody.firstName} ${this.requestBody.middleName} ${this.requestBody.lastName}` 
    this.dob = `${this.requestBody.birthYr}-${this.requestBody.birthMt}-${this.requestBody.birthDt}T00:00:00.000`
    this.PhoneNum = `+${this.requestBody.phoneCountryCode}(${this.requestBody.phoneCityCode})${this.requestBody.phoneLocalCode}`

  }

  soapRequest() {
    const xml = `
        <RetCustAddRequest>
        <RetCustAddRq>
        <CustDtls>
        <CustData>
        <AcctName>${this.fullName}</AcctName>
        <IsDocReceived>Y</IsDocReceived>
        <AddrDtls>
        <AddrLine1></AddrLine1>
        <AddrLine2>N</AddrLine2>
        <AddrLine3>${this.requestBody.streetName}</AddrLine3>
        <AddrCategory>Mailing</AddrCategory>
        <City>${this.requestBody.cityCode}</City>
        <Town>${this.requestBody.town}</Town>
        <Country>${this.requestBody.countryCode}</Country>
        <HoldMailFlag>N</HoldMailFlag>
        <HouseNum>${this.requestBody.houseNumber}</HouseNum>
        <PrefAddr>Y</PrefAddr>
        <PrefFormat>STRUCTURED_FORMAT</PrefFormat>
        <StartDt>${this.requestTime}</StartDt>
        <State>${this.requestBody.stateFinacleCode}</State>
        <StreetName>${this.requestBody.streetName}</StreetName>
        <StreetNum>${this.requestBody.houseNumber}</StreetNum>
        <PostalCode>${this.requestBody.postalCode}</PostalCode>
        </AddrDtls>
        <BirthDt>${this.requestBody.birthDt}</BirthDt>
        <BirthMonth>${this.requestBody.birthMt}</BirthMonth>
        <BirthYear>${this.requestBody.birthYr}</BirthYear>
        <CreatedBySystemId>${this.requestBody.createdBy}</CreatedBySystemId>
        <DateOfBirth>${this.dob}</DateOfBirth>
        <Language>UK (English)</Language>
        <LastName>${this.requestBody.lastName}</LastName>
        <FirstName>${this.requestBody.firstName}</FirstName>
        <MiddleName>${this.requestBody.middleName}</MiddleName>
        <TradeFinFlag>N</TradeFinFlag>
        <IsEbankingEnabled>N</IsEbankingEnabled>
        <IsMinor>Y</IsMinor>
        <IsCustNRE>N</IsCustNRE>
        <DefaultAddrType>Mailing</DefaultAddrType>
        <Gender>${this.requestBody.gender}</Gender>
        <Manager>${this.requestBody.manager}</Manager>
        <NativeLanguageCode>INFENG</NativeLanguageCode>
        <Occupation>OTH</Occupation>
        <OperationsReasonCode>
        <ExpDt>2020-03-30T00:00:00.000</ExpDt>
        </OperationsReasonCode>
        <PhoneEmailDtls>
        <Email></Email>
        <PhoneEmailType>CELLPH</PhoneEmailType>
        <PhoneNum>${this.PhoneNum}</PhoneNum>
        <PhoneNumCityCode>${this.requestBody.phoneCityCode}</PhoneNumCityCode>
        <PhoneNumCountryCode>${this.requestBody.phoneCountryCode}</PhoneNumCountryCode>
        <PhoneNumLocalCode>${this.requestBody.phoneLocalCode}</PhoneNumLocalCode>
        <PhoneOrEmail>PHONE</PhoneOrEmail>
        <PrefFlag>Y</PrefFlag>
        </PhoneEmailDtls>
        <PhoneEmailDtls>
        <Email>${this.requestBody.email}</Email>
        <PhoneEmailType>COMMEML</PhoneEmailType>
        <PhoneNum></PhoneNum>
        <PhoneNumCityCode></PhoneNumCityCode>
        <PhoneNumCountryCode></PhoneNumCountryCode>
        <PhoneNumLocalCode></PhoneNumLocalCode>
        <PhoneOrEmail>EMAIL</PhoneOrEmail>
        <PrefFlag>Y</PrefFlag>
        </PhoneEmailDtls>
        <PrefName>${this.requestBody.firstName}</PrefName>
        <PrefPhone>${this.PhoneNum}</PrefPhone>
        <PrimarySolId>${this.requestBody.primarySolId}</PrimarySolId>
        <PassportExpDt>2099-01-02T00:00:00.000</PassportExpDt>
        <RelationshipOpeningDt>${this.requestTime}</RelationshipOpeningDt>
        <RiskProfileExpDt>2099-12-31T00:00:00.000</RiskProfileExpDt>
        <Salutation>${this.salutation}</Salutation>
        <SecondaryRMId>${this.requestBody.secondaryRMId}</SecondaryRMId>
        <SegmentationClass>MINOR</SegmentationClass>
        <StaffFlag>N</StaffFlag>
        <SubSegment>OTHER</SubSegment>
        <TaxDeductionTable>C0.00</TaxDeductionTable>
        <ShortName>${this.requestBody.lastName}</ShortName>
        <Name>${this.fullName}</Name>
        </CustData>
        </CustDtls>
        <RelatedDtls>
        <DemographicData>
        <MaritalStatus>SINGL</MaritalStatus>
        <Nationality>${this.requestBody.countryCode}</Nationality>
        <EmploymentStatus>Unemployed</EmploymentStatus>
        </DemographicData>
        <EntityDoctData>
        <CountryOfIssue>${this.requestBody.docCountryOfIssue}</CountryOfIssue>
        <preferredUniqueId>Y</preferredUniqueId>
        <DocCode>${this.requestBody.docCode}</DocCode>
        <ExpDt>${this.requestBody.docExDate}T00:00:00.000</ExpDt>
        <IssueDt>${this.requestBody.docIssDate}T00:00:00.000</IssueDt>
        <TypeCode>RET_ID</TypeCode>
        <PlaceOfIssue>${this.requestBody.docPlaceofIssueCode}</PlaceOfIssue>
        <ReferenceNum>${this.requestBody.docRefNumber}</ReferenceNum>
        </EntityDoctData>
        <PsychographicData>
        <CustCurrCode>${this.requestBody.custCrncyCode}</CustCurrCode>
        <PsychographMiscData>
        <StrText10>NGN</StrText10>
        <DTDt1>2099-12-31T00:00:00.000</DTDt1>
        <Type>CURRENCY</Type>
        </PsychographMiscData>
        </PsychographicData>
        <RelationshipDtls>
        <AllowModify>Y</AllowModify>
        <ChildCustId>${this.requestBody.guardianCif}</ChildCustId>
        <ChildEntity>CUSTOMER</ChildEntity>
        <ChildEntityType>Retail</ChildEntityType>
        <Relationship>Guardian</Relationship>
        <GuardCode>${this.requestBody.guardianCode}</GuardCode>
        <RelationshipCategory>Social</RelationshipCategory>
        </RelationshipDtls>
        </RelatedDtls>
        </RetCustAddRq>
        </RetCustAddRequest>
    `;

    return xml
  }
}
