import { FontAwesome } from "@expo/vector-icons";
import { HStack, Icon, Text } from "native-base";

type Props = {
  item: string;
};

export default function CardItem({ item }: Props) {
  return (
    <HStack
      borderWidth={1}
      borderColor="gray.300"
      borderRadius={8}
      mb={4}
      bgColor="coolGray.100"
      padding={3}
      pb={7}
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack alignItems="center">
        <Text>Visa | </Text>
        <Text fontSize={10}>● ● ● ● </Text>
        <Text>{item.slice(12)}</Text>
      </HStack>

      <Icon color="blue.800" size={25} as={<FontAwesome name="cc-visa" />} />
    </HStack>
  );
}
