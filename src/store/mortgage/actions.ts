import { createAction } from "@reduxjs/toolkit";
import { TBank } from "../bank/reducer";
import { TCalculateMortgagePaymentData } from "./reducer";

export const setCurrentBankMortgageAction = createAction<TBank | null>(
  "MORTGAGE/SET_CURRENT_BANK"
);

export const calculateMortgageMonthlyPaymentAction =
  createAction<TCalculateMortgagePaymentData | null>(
    "MORTGAGE/CALCULATE_MONTHLY_PAYMENT"
  );

export const resetMortgageMonthlyPaymentAction = createAction(
  "MORTGAGE/RESET_MONTHLY_PAYMENT"
);
