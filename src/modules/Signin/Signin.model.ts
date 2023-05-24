import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/model";

export type SigninViewNavigationType = NavigationProp<RootStackParamList, 'HomeScreen'>

export interface SigninViewPropsType {
}

export type FormDataProps = {
  email: string;
  password: string;
};