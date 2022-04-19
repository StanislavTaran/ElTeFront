import { TBank } from "../../store/bank/reducer";
import request from "./client";

const PATHs = {
  CREATE: "/bank",
  UPDATE: "/bank",
  DELETE: "/bank/{id}",
  GET_ALL: "/bank/list",
};

export const createBankRequest = async (data: Omit<TBank, "id">) => {
  return request.post<{ data: { id: number } }>(PATHs.CREATE, data);
};

export const updateBankRequest = async (data: TBank) => {
  return request.put(PATHs.UPDATE, data);
};

export const deleteBankRequest = async (id: number) => {
  return request.delete(PATHs.DELETE.replace("{id}", String(id)));
};

export const fetchAllBanksRequest = async () => {
  return request.get<{ data: TBank[] }>(PATHs.GET_ALL);
};
