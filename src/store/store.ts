import { configureStore } from "@reduxjs/toolkit";
import { reducer as toastrReducer } from "react-redux-toastr";
import { banksStore } from "./bank/reducer";
import createSagaMiddleware from "redux-saga";
import watchAll from "./rootSaga";
import mortgageStore from "./mortgage/reducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    banks: banksStore.reducer,
    mortgage: mortgageStore.reducer,
    toastr: toastrReducer,
  },
  middleware,
});

sagaMiddleware.run(watchAll);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
