import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  calculateMortgageMonthlyPaymentAction,
  resetMortgageMonthlyPaymentAction,
  setCurrentBankMortgageAction,
} from "./actions";
import { TBank } from "../bank/reducer";
import {
  setCurrentBank,
  setMonthlyPayment,
  TCalculateMortgagePaymentData,
} from "./reducer";

import { toastr } from "react-redux-toastr";
import { calculateMortgageRequest } from "../../api/bankSystem/mortgageRequest";

export function* setCurrentBankSaga({ payload }: PayloadAction<TBank | null>) {
  yield put(setCurrentBank(payload));
}

function* calculateMonthlyPaymentSaga(
  action: PayloadAction<TCalculateMortgagePaymentData>
) {
  try {
    const res = yield call(calculateMortgageRequest, action.payload);
    if (res.status < 400) {
      const { monthlyPayment } = res.data.data;
      yield put(setMonthlyPayment(monthlyPayment));
      toastr.success("Success", "Calculated!");
    } else {
      const { reason } = res.data;
      toastr.warning("Error", reason);
    }
  } catch (e) {
    yield toastr.error("Error", e.message);
  }
}

function* resetMonthlyPaymentSaga() {
  yield put(setMonthlyPayment(0));
}

function* mortgageWatcher() {
  yield takeEvery(setCurrentBankMortgageAction.type, setCurrentBankSaga);
  yield takeEvery(
    calculateMortgageMonthlyPaymentAction.type,
    calculateMonthlyPaymentSaga
  );
  yield takeEvery(
    resetMortgageMonthlyPaymentAction.type,
    resetMonthlyPaymentSaga
  );
}

export default mortgageWatcher;
