import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/model";

export type SigninViewNavigationType = NavigationProp<RootStackParamList, 'HomeScreen'>

export type FormDataProps = {
  email: string;
  password: string;
};