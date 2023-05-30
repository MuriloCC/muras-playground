import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddCard from "../modules/AddCard/AddCard.view";
import HomeView from "../modules/Home/Home.view";
import SigninView from "../modules/Signin/Signin.view";
import { RootStackParamList, hasBackButtonHeaderOptions } from "./model";

export default function SigninRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#ffff",
        },
      }}
    >
      <Screen
        options={{ headerShown: false }}
        name="SigninScreen"
        component={SigninView}
      />
      <Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeView}
      />
      <Screen
        options={hasBackButtonHeaderOptions}
        name="AddCard"
        component={AddCard}
      />
    </Navigator>
  );
}
