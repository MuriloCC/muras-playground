import { useNavigation } from "@react-navigation/native";
import { Box, Button, Text } from "native-base";
import { useQuery } from "react-query";
import { users } from "../../services/user";

export default function HomeView() {
  const navigation = useNavigation();
  const { data } = useQuery("authenticated_user", () => users.getAllUsers(), {
    staleTime: 1000 * 120,
  });

  return (
    <Box flex={1} mt={10}>
      {data?.map((item) => (
        <Text>{item.name}</Text>
      ))}

      <Button mt={10} onPress={() => navigation.navigate("ProfileScreen")}>
        Ir para perfil
      </Button>
    </Box>
  );
}
