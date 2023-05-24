import { Box, Spinner, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useAppSelector } from "../../redux/app/hooks";

//used globally when needed.

export function LoaderScreen() {
  const { loaderScreen } = useAppSelector((state) => state.global);

  if (!loaderScreen) return null;

  return (
    <Box
      bgColor="primary.400"
      alignItems="center"
      justifyContent="center"
      style={styles.container}
    >
      <Spinner color="white" size="lg" />
      <Text color="white" fontSize="lg" fontWeight="bold">
        Carregando...
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
