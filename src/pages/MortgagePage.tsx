import RegularLayout from "../layouts/RegularLayout";
import React, { ReactNode, useEffect, useState } from "react";
import { Box, Grid, SelectChangeEvent, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../store/store";
import { fetchAllBanksAction } from "../store/bank/actions";
import BankCard from "../components/Mortgage/BankCard";
import Calculator from "../components/Mortgage/Calculator";
import {
  calculateMortgageMonthlyPaymentAction,
  resetMortgageMonthlyPaymentAction,
  setCurrentBankMortgageAction,
} from "../store/mortgage/actions";
import { TCalculateMortgagePaymentData } from "../store/mortgage/reducer";

const MortgagePage: React.FC = () => {
  const banksList = useAppSelector((state: RootState) => state.banks.banksList);
  const currentBank = useAppSelector((state) => state.mortgage.currentBank);
  const monthlyPayment = useAppSelector(
    (state) => state.mortgage.monthlyPayment
  );
  const dispatch = useAppDispatch();

  const [initialLoan, setInitialLoan] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  const handleChangeInitialLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || value >= Number.MAX_SAFE_INTEGER || value < 0) {
      return;
    }
    setInitialLoan(value);
  };

  const handleChangeDownPayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value) || value >= Number.MAX_SAFE_INTEGER || value < 0) {
      return;
    }
    setDownPayment(value);
  };

  const handleSelectBank = (event: SelectChangeEvent<number>, _: ReactNode) => {
    const bank = banksList.find(
      (item) => item.id === Number(event.target.value)
    );
    if (bank) {
      dispatch(setCurrentBankMortgageAction(bank));
    }
  };

  useEffect(() => {
    dispatch(fetchAllBanksAction());
  }, []);

  const handleCalculate = () => {
    const data: TCalculateMortgagePaymentData = {
      bankId: currentBank!.id,
      downPayment,
      initialLoan,
    };

    dispatch(calculateMortgageMonthlyPaymentAction(data));
  };

  const handleReset = () => {
    dispatch(resetMortgageMonthlyPaymentAction());
    dispatch(setCurrentBankMortgageAction(null));
    setDownPayment(0);
    setInitialLoan(0);
  };

  return (
    <RegularLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid padding={10} container spacing={2}>
          <Grid item xs={6} md={4}>
            {currentBank ? (
              <BankCard bank={currentBank}></BankCard>
            ) : (
              <Typography>Please select the bank</Typography>
            )}
          </Grid>
          <Grid item xs={6} md={8}>
            <Calculator
              bankList={banksList}
              currentBank={currentBank}
              values={{ downPayment, initialLoan }}
              controls={{
                onChangeDownPayment: handleChangeDownPayment,
                onChangeInitialLoan: handleChangeInitialLoan,
                onSubmit: handleCalculate,
                onReset: handleReset,
                onSelectBank: handleSelectBank,
              }}
            />
            {monthlyPayment ? (
              <Typography>
                Monthly Payment : $
                {(Math.round(monthlyPayment * 100) / 100).toFixed(2)}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      </Box>
    </RegularLayout>
  );
};

export default MortgagePage;
