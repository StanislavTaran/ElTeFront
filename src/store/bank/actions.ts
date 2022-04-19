import { createAction } from "@reduxjs/toolkit";
import { TBank } from "./reducer";

export const createBankAction = createAction<Omit<TBank, "id">>(
  "BANK/CREATE_BANK_ACTION_START"
);

export const updateBankAction = createAction<TBank>(
  "BANK/UPDATE_BANK_ACTION_START"
);

export const removeBankAction = createAction<number>(
  "BANK/REMOVE_BANK_ACTION_START"
);

export const fetchAllBanksAction = createAction(
  "BANK/FETCH_ALL_BANKS_ACTION_START"
);
