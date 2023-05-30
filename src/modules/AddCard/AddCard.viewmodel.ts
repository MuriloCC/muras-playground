import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";
import { useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { useMutation, useQueryClient } from "react-query";
import { ResponseErrorType } from "../../common/model/HttpModel";
import { Toast } from "../../components/Toast/Toast.view";
import { useAppSelector } from "../../redux/app/hooks";
import { cards } from "../../services/cards";
import { AddCardFormData } from "./AddCard.model";
import { addCardFormSchema } from "./Forms/schema";


export default function useAddCardViewModel() {
  const navigation = useNavigation()
  const queryClient = useQueryClient()
  const userSelector = useAppSelector(state => state.user)
  const { control, handleSubmit, formState } = useForm<AddCardFormData>({
    resolver: yupResolver(addCardFormSchema),
  });
  const toast = useToast()

  const mutation = useMutation<
    AddCardFormData,
    ResponseErrorType,
    AddCardFormData
  >({
    mutationFn: handleOnSubmit,
    onSuccess: handleOnSuccess,
    onError: handleOnError
  })

  const { errors } = formState

  function submit(data: AddCardFormData) {
    const formatedData: AddCardFormData = {
      ...data,
      cardNumber: data.cardNumber.replaceAll(' ', ''),
    }

    console.log(formatedData)
    mutation.mutate(formatedData)
  }

  function handleOnSubmit(data: AddCardFormData) {
    Keyboard.dismiss();
    return cards.postCard({ ...data, ownerId: userSelector.user.id });
  }

  function handleOnSuccess() {
    toast.show({
      placement: 'top',
      render: () => Toast({ message: "Cartão criado com sucesso!", type: 'success' })
    });


    queryClient.invalidateQueries(['get_user_cards'])

    navigation.navigate("HomeScreen")

    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 1,
    //     routes: [
    //       {
    //         name: "AddCard",
    //       },
    //       { name: "HomeScreen" },
    //     ],
    //   }),
    // )
  }

  function handleOnError(error: ResponseErrorType) {
    toast.show({
      placement: 'top',
      render: () => Toast({ message: error.response.data as string, type: 'error' })
    });
  }

  return {
    control, handleSubmit, errors, submit
  }
}