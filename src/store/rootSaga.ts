import { all } from "redux-saga/effects";
import bankWatcher from "./bank/saga";
import mortgageWatcher from "./mortgage/saga";

function* watchAll() {
  yield all([bankWatcher(), mortgageWatcher()]);
}

export default watchAll;
