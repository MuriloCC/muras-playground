import { NativeBaseProvider } from "native-base";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { LoaderScreen } from "./src/components/LoaderScreen/LoaderScreen.view";
import store from "./src/redux/store";
import AppRoutes from "./src/routes";
import { queryClient } from "./src/services/api";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Provider store={store}>
          <AppRoutes />
          <LoaderScreen />
        </Provider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
