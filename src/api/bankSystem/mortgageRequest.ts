import request from "./client";
import { TCalculateMortgagePaymentData } from "../../store/mortgage/reducer";

const PATHs = {
  CALCULATE: "/mortgage/calculate",
};

type TCalculateMortgageResponse = { data: { monthlyPayment: number } };

export const calculateMortgageRequest = async (
  data: TCalculateMortgagePaymentData
) => {
  return request.post<TCalculateMortgageResponse>(PATHs.CALCULATE, data);
};
