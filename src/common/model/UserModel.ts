import { AddressModel } from "./AddressModel";

export interface UserModel {
  email: string,
  name: string,
  lastname: string,
  address: AddressModel,
  id: string
}

export interface UserResponseModel {
  user: UserModel
  accessToken: string
}

export interface UserStateModel extends UserResponseModel {
}