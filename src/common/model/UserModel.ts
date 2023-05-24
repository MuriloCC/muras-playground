import { AddressModel } from "./AddressModel";

export interface UserModel {
  email: string,
  name: string,
  lastname: string,
  address: AddressModel,
  id: string
}

export interface UserResponseModel extends UserModel {
  accessToken: string
}

export interface UserStateModel extends UserModel {
  accessToken: string,
  isLogged: boolean
}