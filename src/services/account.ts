import { AccountModel } from "../common/model/AccountModel";
import { api } from "./api";

export const account = {
  getAccountData: async (ownerId: string) => {
    const response = await api.get<AccountModel[]>(`/account?ownerId=${ownerId}`)
    return response.data;
  },
}