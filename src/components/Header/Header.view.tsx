import { FontAwesome } from "@expo/vector-icons";
import { Box, HStack, Heading, IconButton, Text, VStack } from "native-base";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { AccountModel } from "../../common/model/AccountModel";

type Props = {
  userName: string;
  amount: number;
  loader: boolean;
  handleChangeShowAmountState: () => void;
  refetchData: (
    options?: (RefetchOptions & RefetchQueryFilters<unknown>) | undefined,
  ) => Promise<QueryObserverResult<AccountModel[], unknown>>;
  showAmount: boolean;
};

export function Header({
  userName,
  amount,
  loader,
  refetchData,
  showAmount,
  handleChangeShowAmountState,
}: Props) {
  return (
    <Box bgColor="primary.800" paddingTop={12} paddingBottom={6} paddingX={6}>
      <Heading marginBottom={6} color="white">
        Olá, {userName}
      </Heading>
      <HStack justifyContent="space-between">
        <VStack>
          <Text color="white" fontSize="sm">
            Saldo Disponível
          </Text>
          {!showAmount ? (
            <Text color="white">● ● ● ● ● ●</Text>
          ) : (
            <Text color="white" fontSize="lg" fontWeight="bold">
              {amount.toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
                maximumFractionDigits: 2,
              })}
            </Text>
          )}
        </VStack>
        <HStack>
          <IconButton
            onPress={handleChangeShowAmountState}
            icon={
              <FontAwesome
                color="white"
                name={showAmount ? "eye-slash" : "eye"}
                size={25}
              />
            }
          />
          <IconButton
            onPress={() => refetchData()}
            icon={<FontAwesome color="white" name="rotate-right" size={18} />}
          />
        </HStack>
      </HStack>
    </Box>
  );
}
