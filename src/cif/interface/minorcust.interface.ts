export interface MinorCust {
    firstName:              string;
    middleName:             string;
    lastName:               string;
    streetName:             string;
    cityCode:               string;
    town:                   string;
    countryCode:            string;
    houseNumber:            string;
    stateFinacleCode:       string;
    postalCode:             string;
    birthDt:                string;
    birthMt:                string;
    birthYr:                string;
    createdBy:              string;
    gender:                 string;
    manager:                string;
    phoneCityCode:          string;
    phoneCountryCode:       string;
    phoneLocalCode:         string;
    email:                  string;
    primarySolId:           string;
    secondaryRMId:          string;
    nationality:            string;
    docCountryOfIssue:      string;
    docCode:                string;
    docExDate:              string;
    docIssDate:             string;
    docPlaceofIssueCode:    string;
    docRefNumber:           string;
    custCrncyCode:          string;
    guardianName:           string;
    guardianCode:           string;
    guardianCif:            string;
}
  
  
export interface RetCustRes {
    status: string
    message: string
}  