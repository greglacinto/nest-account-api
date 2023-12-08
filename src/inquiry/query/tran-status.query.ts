export const getTransactionStatusDTDSQL = 
`
SELECT 	
	PSTD_FLG 
FROM 
	TBAADM.DTD 
WHERE 
	TRAN_DATE =TO_CHAR(TO_DATE(:tranDate, 'YYYY-MM-DD'), 'DD-MON-YYYY')
	AND TRIM(TRAN_ID) = :tranId 
	AND ROWNUM = 1
`;

export const getTransactionStatusHTDSQL = 
`
SELECT 	
	PSTD_FLG 
FROM 
	TBAADM.HTD 
WHERE 
	TRAN_DATE =TO_CHAR(TO_DATE(:tranDate, 'YYYY-MM-DD'), 'DD-MON-YYYY')
	AND TRIM(TRAN_ID) = :tranId 
	AND ROWNUM = 1
`;