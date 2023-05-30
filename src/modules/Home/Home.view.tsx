import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Heading, Icon, ScrollView, Text, VStack } from "native-base";
import { useQuery } from "react-query";
import { Button } from "../../components/Button/Button.view";
import { Header } from "../../components/Header/Header.view";
import { handleAccountData } from "../../redux/account/accountSlice";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { changeShowAmountState } from "../../redux/global/globalSlice";
import { account } from "../../services/account";
import { cards } from "../../services/cards";
import CardItem from "./components/CardItem";

export default function HomeView() {
  const navigation = useNavigation();
  const userSelector = useAppSelector((state) => state.user);
  const globalSelector = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  const { data: getAllCardsData } = useQuery({
    queryKey: "get_user_cards",
    queryFn: () => cards.getAllUserCardsByOwnerId(userSelector.user.id),
    staleTime: 1000 * 60 * 10, //10 minutes,
  });

  const {
    data: getAccountData,
    isFetching: isFetchingAccountData,
    isRefetching: isRefetchingAccountData,
    refetch: refetchGetAccountData,
  } = useQuery({
    queryKey: "get_account",
    queryFn: () => account.getAccountData(userSelector.user.id),
    onSuccess: (data) => {
      dispatch(handleAccountData(data[0]));
      return data[0];
    },
  });

  function handleChangeShowAmountState() {
    dispatch(changeShowAmountState());
  }

  return (
    <VStack bg="white" flex={1}>
      <Header
        loader={isFetchingAccountData || isRefetchingAccountData}
        amount={getAccountData ? getAccountData[0].amount : 0}
        userName={userSelector.user.name}
        refetchData={refetchGetAccountData}
        showAmount={globalSelector.amountVisibility}
        handleChangeShowAmountState={handleChangeShowAmountState}
      />
      <Box paddingX={6} flex={1} paddingTop={4} paddingBottom={8}>
        <Heading mb={3}>Meus Cartões</Heading>
        <ScrollView>
          {getAllCardsData && getAllCardsData.length > 0 ? (
            getAllCardsData?.map((item, idx) => (
              <CardItem key={idx} item={item.cardNumber} />
            ))
          ) : (
            <VStack flex={1} alignItems="center">
              <Text fontSize="lg">Nenhum cartão cadastrado...</Text>
              <Icon as={<FontAwesome name="list" />} size={7} />
            </VStack>
          )}
        </ScrollView>

        <Button
          title="Adicionar cartão"
          titleColor="white"
          mt={10}
          onPress={() => navigation.navigate("AddCard")}
        />
      </Box>
    </VStack>
  );
}
