import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../modules/Home/Home.view";
import ProfileView from "../modules/Profile/view";
import SigninView from "../modules/Signin/Signin.view";
import { RootStackParamList } from "./model";

export default function SigninRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SigninScreen" component={SigninView} />
      <Screen name="HomeScreen" component={HomeView} />
      <Screen name="ProfileScreen" component={ProfileView} />
    </Navigator>
  );
}
