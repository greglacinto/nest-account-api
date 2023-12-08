export const getAccountNameSQL = 
`SELECT 
    ACCT_NAME
FROM 
    TBAADM.GAM 
WHERE 
    FORACID = :foracid
`;
