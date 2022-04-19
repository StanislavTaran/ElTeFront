import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TBank = {
  id: number;
  name: string;
  interestRate: number;
  maxLoan: number;
  minDownPayment: number;
  loanTerm: number;
};

interface BanksState {
  banksList: TBank[];
}
const initialState: BanksState = {
  banksList: [],
};

export const banksStore = createSlice({
  name: "banks",
  initialState,
  reducers: {
    addBankSuccess: (state, { payload }: PayloadAction<TBank>) => {
      state.banksList = [...state.banksList, payload];
    },

    updateBankSuccess: (state, { payload }: PayloadAction<TBank>) => {
      state.banksList = state.banksList.map((item) =>
        item.id !== payload.id ? item : payload
      );
    },

    getAllBanksSuccess: (state, { payload }: PayloadAction<TBank[]>) => {
      state.banksList = [...payload];
    },
    removeBankSuccess: (state, { payload }: PayloadAction<number>) => {
      state.banksList = state.banksList.filter((bank) => bank.id !== payload);
    },
  },
});

export const {
  addBankSuccess,
  updateBankSuccess,
  getAllBanksSuccess,
  removeBankSuccess,
} = banksStore.actions;

export default banksStore;
