export const getAccountBalanceSQL = 
`SELECT 
    CLR_BAL_AMT, LIEN_AMT as BALANCE
FROM 
    TBAADM.GAM 
WHERE 
    FORACID = :foracid
`;
