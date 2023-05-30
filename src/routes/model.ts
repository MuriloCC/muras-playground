import { NativeStackNavigationOptions } from "@react-navigation/native-stack"

export type RootStackParamList = {
  HomeScreen: undefined,
  SigninScreen: undefined,
  ProfileScreen: undefined
  AddCard: undefined
}

export const hasBackButtonHeaderOptions: NativeStackNavigationOptions = {
  headerTitle: "",
  headerShadowVisible: false,
  headerTintColor: "#000",
}