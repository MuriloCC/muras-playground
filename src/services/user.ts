import { UserResponseModel } from "../common/model/UserModel";
import { api } from "./api";

export const users = {
  getUserByEmailAndPassword: async (email: string, password: string) => {
    const response = await api.post<UserResponseModel>(`/login`, { email, password })
    return response.data;
  },
  getAllUsers: async () => {
    const response = await api.get<UserResponseModel[]>(`/users`)
    console.log(response)
    return response.data;
  }
}