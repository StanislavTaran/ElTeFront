import { put, call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addBankSuccess,
  getAllBanksSuccess,
  removeBankSuccess,
  TBank,
  updateBankSuccess,
} from "./reducer";
import {
  createBankRequest,
  deleteBankRequest,
  fetchAllBanksRequest,
  updateBankRequest,
} from "../../api/bankSystem/bankRequest";
import {
  createBankAction,
  fetchAllBanksAction,
  removeBankAction,
  updateBankAction,
} from "./actions";
import { toastr } from "react-redux-toastr";

export function* createBankSaga(action: PayloadAction<Omit<TBank, "id">>) {
  try {
    const res = yield call(createBankRequest, action.payload);
    if (res.status === 200) {
      const {
        data: {
          data: { id },
        },
      } = res;
      yield put(addBankSuccess({ id, ...action.payload }));
      toastr.success("Success", "New Bank created!");
    } else {
      toastr.error("Error", res.data.reason);
    }
  } catch (e) {
    yield toastr.error("Error", e.message);
  }
}

export function* updateBankSaga(action: PayloadAction<TBank>) {
  try {
    const res = yield call(updateBankRequest, action.payload);
    if (res.status === 200) {
      yield put(updateBankSuccess({ ...action.payload }));
      toastr.success("Success", "Bank successfully updated!");
    } else {
      toastr.error("Error", res.data.reason);
    }
  } catch (e) {
    yield toastr.error("Error", e.message);
  }
}

export function* removeBankSaga(action: PayloadAction<number>) {
  try {
    yield call(deleteBankRequest, action.payload);
    yield put(removeBankSuccess(action.payload));
    toastr.success("Success", "Bank successfully removed!");
  } catch (e) {
    yield toastr.error("Error", e.message);
  }
}

export function* fetchAllBanksSaga() {
  try {
    const res = yield call(fetchAllBanksRequest);
    yield put(getAllBanksSuccess(res.data.data));
  } catch (e) {
    yield toastr.error("Error", e.message);
  }
}

function* bankWatcher() {
  yield takeEvery(createBankAction.type, createBankSaga);
  yield takeEvery(updateBankAction.type, updateBankSaga);
  yield takeEvery(removeBankAction.type, removeBankSaga);
  yield takeEvery(fetchAllBanksAction.type, fetchAllBanksSaga);
}

export default bankWatcher;
