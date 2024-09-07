import { TableCell, TableRow, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#EDEDED',
      color: '#323A47',
      minWidth: 100,
      textTransform: 'capitalize',
      padding: '5px 20px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
    },
}));

export const StyledFirstTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: '#323A47',
      minWidth: 100,
      textTransform: 'capitalize',
      padding: '5px 20px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
    },
}));
  
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));