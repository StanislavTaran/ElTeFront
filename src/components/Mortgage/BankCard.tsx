import * as React from "react";
import { TBank } from "../../store/bank/reducer";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type TBankCardProps = { bank: TBank };

const BankCard: React.FC<TBankCardProps> = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Current bank</TableCell>
            <TableCell align="right">Interest Rate</TableCell>
            <TableCell align="right">MAX Loan</TableCell>
            <TableCell align="right">MIN Down Payment</TableCell>
            <TableCell align="right">Loan Term</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              {props.bank.name}
            </TableCell>
            <TableCell align="right">{props.bank.interestRate}</TableCell>
            <TableCell align="right">{props.bank.maxLoan}</TableCell>
            <TableCell align="right">{props.bank.minDownPayment}</TableCell>
            <TableCell align="right">{props.bank.loanTerm}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BankCard;
