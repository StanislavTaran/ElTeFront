import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBank } from "../bank/reducer";

export type TCalculateMortgagePaymentData = {
  bankId: number;
  downPayment: number;
  initialLoan: number;
};

interface MortgageState {
  currentBank: TBank | null;
  monthlyPayment: number;
}
const initialState: MortgageState = {
  currentBank: null,
  monthlyPayment: 0,
};

export const mortgageStore = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    setCurrentBank: (state, { payload }: PayloadAction<TBank | null>) => {
      state.currentBank = payload;
    },
    setMonthlyPayment: (state, { payload }: PayloadAction<number>) => {
      state.monthlyPayment = payload;
    },
  },
});

export const { setCurrentBank, setMonthlyPayment } = mortgageStore.actions;

export default mortgageStore;
