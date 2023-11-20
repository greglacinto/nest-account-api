import { CorpCust } from "../interface/corpcust.interface"


export class CorpCustFI {
    requestBody: CorpCust

    requestTime = new Date().toISOString()
    phoneNum = ''

    constructor(payload: CorpCust){
        this.requestBody = payload
        this.phoneNum = `+${this.requestBody.phoneCountryCode}(${this.requestBody.phoneCountryCode})+${this.requestBody.phoneLocalCode}`
    }

    soapRequest(){
        const xml = `
            <createCorporateCustomerRequest>
            <CorpCustDetails>
            <corpCustomerDtlsData>
            <corpCustomerData>
            <corpAddressData>
            <address_line1>.</address_line1>
            <address_line2>${this.requestBody.street}</address_line2>
            <address_line3>Z</address_line3>
            <addresscategory>Registered</addresscategory>
            <preferredAddress>Y</preferredAddress>
            <city>${this.requestBody.cityCode}</city>
            <country>${this.requestBody.countryCode}</country>
            <preferredFormat>FREE_TEXT_FORMAT</preferredFormat>
            <start_date>${this.requestTime}</start_date>
            <state>${this.requestBody.stateCode}</state>
            <zip>${this.requestBody.zipCode}</zip>
            <FreeTextLabel>.</FreeTextLabel>
            <holdMailFlag>N</holdMailFlag>
            </corpAddressData>
            <corporate_name>${this.requestBody.corpName}</corporate_name>
            <corpPhoneEmailData>
            <email></email>
            <phoneemailtype>COMMPH1</phoneemailtype>
            <phoneno>${this.phoneNum}</phoneno>
            <phonenocitycode>${this.requestBody.phoneCityCode}</phonenocitycode>
            <phonenocountrycode>${this.requestBody.phoneCountryCode}</phonenocountrycode>
            <phonenolocalcode>${this.requestBody.phoneLocalCode}</phonenolocalcode>
            <phoneoremail>PHONE</phoneoremail>
            <preferredflag>Y</preferredflag>
            <start_date>${this.requestTime}</start_date>
            </corpPhoneEmailData>
            <corpPhoneEmailData>
            <email>${this.requestBody.email}</email>
            <phoneemailtype>COMMEML</phoneemailtype>
            <phoneno></phoneno>
            <phonenocitycode></phonenocitycode>
            <phonenocountrycode></phonenocountrycode>
            <phonenolocalcode></phonenolocalcode>
            <phoneoremail>EMAIL</phoneoremail>
            <preferredflag>Y</preferredflag>
            <start_date>${this.requestTime}</start_date>
            </corpPhoneEmailData>
            <createdBySystemID>${this.requestBody.createdBy}</createdBySystemID>
            <crncy_Code>${this.requestBody.custCrncyCode}</crncy_Code>
            <cust_hlth>${this.requestBody.custHealthCode}</cust_hlth>
            <date_of_incorporation>${this.requestBody.incorpDate}T00:00:00.000</date_of_incorporation>
            <defaultaddresstype>Registered</defaultaddresstype>
            <document_received_flag>Y</document_received_flag>
            <keycontact_personname>${this.requestBody.keyContactPerson}</keycontact_personname>
            <entity_type>Customer</entity_type>
            <health_desc>${this.requestBody.healthDesc}</health_desc>
            <lang_desc>UK (English)</lang_desc>
            <legalentity_type>${this.requestBody.legalEntityType}</legalentity_type>
            <nativeLangCode>INFENG</nativeLangCode>
            <notes>NA</notes>
            <relationship_type>New</relationship_type>
            <entityclass>${this.requestBody.entityClass}</entityclass>
            <average_annualincome>${this.requestBody.aveAnnualIncome}</average_annualincome>
            <primary_service_center>${this.requestBody.primServiceCenter}</primary_service_center>
            <trade_services_availed>N</trade_services_availed>
            <islamic_banking_customer>N</islamic_banking_customer>
            <primaryRM_ID>${this.requestBody.primRmId}</primaryRM_ID>
            <priority>Normal</priority>
            <region>CTY</region>
            <relationship_createdby>${this.requestBody.relCreatedBy}</relationship_createdby>
            <relationship_startdate>${this.requestBody.relStartDate}T00:00:00.000</relationship_startdate>
            <IsEbankingEnabled>N</IsEbankingEnabled>
            <segment>CORP</segment>
            <short_name>${this.requestBody.shortName}</short_name>
            <subsegment>OTHER</subsegment>
            <preferredEmail>${this.requestBody.email}</preferredEmail>
            <preferredEmailType>COMMEML</preferredEmailType>
            <registration_number>${this.requestBody.regNumber}</registration_number>
            <source_of_funds>BUSINESS</source_of_funds>
            <business_type>COMME</business_type>
            <startdate>${this.requestBody.incorpDate}T00:00:00.000</startdate>
            <taxid>${this.requestBody.taxId}</taxid>
            <primaryRMLOGIN_ID>${this.requestBody.primRmId}</primaryRMLOGIN_ID>
            <principle_placeoperation>${this.requestBody.principlePlaceOperation}</principle_placeoperation>
            <remarks>${this.requestBody.primRmId}</remarks>
            <secondaryRM_ID>${this.requestBody.primRmId}</secondaryRM_ID>
            <sector>.</sector>
            <subsector>.</subsector>
            </corpCustomerData>
            </corpCustomerDtlsData>
            <corpRelatedData>
            <corpEntityDocumentData>
            <countryofissue>${this.requestBody.countryCode}</countryofissue>
            <doccode>INCRP</doccode>
            <docissuedate>${this.requestBody.docIssDate}T00:00:00.000</docissuedate>
            <docreceiveddate>${this.requestTime}</docreceiveddate>
            <doctypecode>COR_LTD</doctypecode>
            <placeofissue>${this.requestBody.docPlaceofIssueCode}</placeofissue>
            <referencenumber>${this.requestBody.docRefNumber}</referencenumber>
            </corpEntityDocumentData>
            <corpEntityDocumentData>
            <countryofissue>${this.requestBody.countryCode}</countryofissue>
            <doccode>BDRES</doccode>
            <docissuedate>${this.requestTime}</docissuedate>
            <docreceiveddate>${this.requestTime}</docreceiveddate>
            <doctypecode>COR_RES</doctypecode>
            <placeofissue>${this.requestBody.docPlaceofIssueCode}</placeofissue>
            <referencenumber>1</referencenumber>
            </corpEntityDocumentData>
            <preferencesData>
            <corpPrefMiscData>
            <date1>2099-12-31T00:00:00.000</date1>
            <date2>2099-12-31T00:00:00.000</date2>
            <str1>${this.requestBody.custCrncyCode}</str1>
            <str10>CURRENCY</str10>
            <type>CURRENCY</type>
            </corpPrefMiscData>
            </preferencesData>
            </corpRelatedData>
            </CorpCustDetails>
            </createCorporateCustomerRequest>
        `
        return xml
    }
}