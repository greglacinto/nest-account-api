export interface RetCust {
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
    healthCode:             string;
    gender:                 string;
    manager:                string;
    phoneCityCode:          string;
    phoneCountryCode:       string;
    phoneLocalCode:         string;
    email:                  string;
    primarySolId:           string;
    secondaryRMId:          string;
    maritalStatus:          string;
    nationality:            string;
    docCountryOfIssue:      string;
    docCode:                string;
    docExDate:              string;
    docIssDate:             string;
    docPlaceofIssueCode:    string;
    docRefNumber:           string
    custCrncyCode:          string;
}
  
  
export interface RetCustRes {
    status: string
    message: string
}  