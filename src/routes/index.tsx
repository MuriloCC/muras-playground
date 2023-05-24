import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SigninRoutes from "./Signin";

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <SigninRoutes />
    </NavigationContainer>
  );
}
