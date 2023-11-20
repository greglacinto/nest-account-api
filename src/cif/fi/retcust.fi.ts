import { RetCust } from "../interface/retcust.interface";

export class RetCustFI {
  requestBody: RetCust 
  
  requestTime = this.removeSevenDays(new Date())
  fullName    = ''
  dob         = ''
  PhoneNum    = ''
  salutation  = ''

  removeSevenDays(date = new Date()) {
      date.setDate(date.getDate() - 7);
    
      return date.toISOString();
  }

  constructor(payload: RetCust){
    this.requestBody= payload

    this.fullName = `${this.requestBody.firstName} ${this.requestBody.middleName} ${this.requestBody.lastName}` 
    this.dob = `${this.requestBody.birthYr}-${this.requestBody.birthMt}-${this.requestBody.birthDt}T00:00:00.000`
    this.PhoneNum = `+${this.requestBody.phoneCountryCode}(${this.requestBody.phoneCityCode})${this.requestBody.phoneLocalCode}`

    if (this.requestBody.gender == 'M') {
        this.salutation = 'MR.'
    } else {
      if (this.requestBody.maritalStatus == 'SINGL') {
          this.salutation = 'MS.'
      } else {
          // married female
          this.salutation = 'MRS.'
      }
    }
    
  }

  soapRequest() {
    const xml = `
    <RetCustAddRequest>
    <RetCustAddRq>
    <CustDtls>
    <CustData>
    <AddrDtls>
    <AddrLine1>${this.requestBody.streetName}</AddrLine1>
    <AddrLine2>.</AddrLine2>
    <AddrLine3>.</AddrLine3>
    <AddrCategory>Mailing</AddrCategory>
    <City>${this.requestBody.cityCode}</City>
    <Country>${this.requestBody.countryCode}</Country>
    <FreeTextLabel>.</FreeTextLabel>
    <HoldMailFlag>N</HoldMailFlag>
    <HouseNum>${this.requestBody.houseNumber}</HouseNum>
    <PrefAddr>Y</PrefAddr>
    <PrefFormat>FREE_TEXT_FORMAT</PrefFormat>
    <StartDt>${this.requestTime}</StartDt>
    <State>${this.requestBody.stateFinacleCode}</State>
    <PostalCode>${this.requestBody.postalCode}</PostalCode>
    </AddrDtls>
    <PhoneEmailDtls>
    <Email></Email>
    <PhoneEmailType>CELLPH</PhoneEmailType>
    <PhoneNum>${this.PhoneNum}</PhoneNum>
    <PhoneNumCityCode>${this.requestBody.phoneCityCode}</PhoneNumCityCode>
    <PhoneNumCountryCode>${this.requestBody.phoneCountryCode}</PhoneNumCountryCode>
    <PhoneNumLocalCode>${this.requestBody.phoneLocalCode}</PhoneNumLocalCode>
    <PhoneOrEmail>PHONE</PhoneOrEmail>
    <PrefFlag>Y</PrefFlag>
    <StartDt>${this.requestTime}</StartDt>
    </PhoneEmailDtls>
    <PhoneEmailDtls>
    <Email>${this.requestBody.email}</Email>
    <PhoneEmailType>COMMEML</PhoneEmailType>
    <PhoneOrEmail>EMAIL</PhoneOrEmail>
    <PrefFlag>Y</PrefFlag>
    <StartDt>${this.requestTime}</StartDt>
    </PhoneEmailDtls>
    <BirthDt>${this.requestBody.birthDt}</BirthDt>
    <BirthMonth>${this.requestBody.birthMt}</BirthMonth>
    <BirthYear>${this.requestBody.birthYr}</BirthYear>
    <CreatedBySystemId>${this.requestBody.createdBy}</CreatedBySystemId>
    <DateOfBirth>${this.dob}</DateOfBirth>
    <CustHealthCode>${this.requestBody.healthCode}</CustHealthCode>
    <Language>UK (English)</Language>
    <Name>ABDUL-WAHAB AUDU ISHAKA</Name>
    <LastName>${this.requestBody.lastName}</LastName>
    <FirstName>${this.requestBody.firstName}</FirstName>
    <MiddleName>${this.requestBody.middleName}</MiddleName>
    <ShortName>${this.requestBody.lastName}</ShortName>
    <TradeFinFlag>N</TradeFinFlag>
    <IsEbankingEnabled>N</IsEbankingEnabled>
    <Region>CTY</Region>
    <IsMinor>N</IsMinor>
    <IsCustNRE>N</IsCustNRE>
    <DefaultAddrType>Mailing</DefaultAddrType>
    <Gender>${this.requestBody.gender}</Gender>
    <Manager>${this.requestBody.manager}</Manager>
    <NativeLanguageCode>INFENG</NativeLanguageCode>
    <Occupation>OTH</Occupation>
    <PrefName>${this.requestBody.firstName}</PrefName>
    <OperationsReasonCode>
    <ExpDt>2020-03-30T00:00:00.000</ExpDt>
    </OperationsReasonCode>
    <PrefPhone>${this.PhoneNum}</PrefPhone>
    <PrimarySolId>${this.requestBody.primarySolId}</PrimarySolId>
    <PassportExpDt>2099-01-02T00:00:00.000</PassportExpDt>
    <RelationshipOpeningDt>${(new Date()).toISOString()}</RelationshipOpeningDt>
    <RiskProfileExpDt>2099-12-31T00:00:00.000</RiskProfileExpDt>
    <Salutation>${this.salutation}</Salutation>
    <SecondaryRMId>${this.requestBody.secondaryRMId}</SecondaryRMId>
    <SegmentationClass>RET</SegmentationClass>
    <StaffFlag>N</StaffFlag>
    <SubSegment>MMKT</SubSegment>
    <TaxDeductionTable>C0.00</TaxDeductionTable>
    <Name>${this.fullName}</Name>
    </CustData>
    </CustDtls>
    <RelatedDtls>
    <DemographicData>
    <MaritalStatus>${this.requestBody.maritalStatus}</MaritalStatus>
    <Nationality>${this.requestBody.countryCode}</Nationality>
    <EmploymentStatus>Other</EmploymentStatus>
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
    <EntityType>DUMMY</EntityType>
    </EntityDoctData>
    <PsychographicData>
    <preferred_Locale>en_US</preferred_Locale>
    <CustCurrCode>${this.requestBody.custCrncyCode}</CustCurrCode>
    <PsychographMiscData>
    <EntityCreFlag>Y</EntityCreFlag>
    <StrText10>NGN</StrText10>
    <DTDt1>2099-12-31T00:00:00.000</DTDt1>
    <Type>CURRENCY</Type>
    </PsychographMiscData>
    </PsychographicData>
    </RelatedDtls>
    </RetCustAddRq>
    </RetCustAddRequest>
    `;

    return xml
  }
}
