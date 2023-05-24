import { CommonActions, useNavigation } from "@react-navigation/native";
import { Box, Button } from "native-base";

export default function ProfileView() {
  const navigation = useNavigation();
  return (
    <Box flex={1} mt={10}>
      <Button
        mt={10}
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: "ProfileScreen",
                },
                { name: "HomeScreen" },
              ],
            }),
          )
        }
      >
        Voltar pra home
      </Button>
    </Box>
  );
}
