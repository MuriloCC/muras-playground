import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "native-base";
import React from "react";
import { useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { useMutation } from "react-query";
import { UserResponseModel } from "../../common/model/UserModel";
import { Toast } from "../../components/Toast/Toast.view";
import { useAppDispatch } from "../../redux/app/hooks";
import { hideLoader, showLoader } from "../../redux/global/globalSlice";
import { handleUserData } from "../../redux/user/userSlice";
import { users } from "../../services/user";
import { signinSchema } from "./Forms/SigninForm/schema";
import { FormDataProps, ResponseErrorType, SigninViewNavigationType } from "./Signin.model";

export default function useSigninViewModel() {

  //#[React and Global]hooks and global hooks instances.
  const [isSecret, setIsSecret] = React.useState(true);
  const dispatch = useAppDispatch()
  const navigation = useNavigation<SigninViewNavigationType>()
  const toast = useToast()

  //#[React-Query] hooks and hooks instances.
  const mutation = useMutation<
    UserResponseModel,
    ResponseErrorType,
    FormDataProps
  >({
    mutationKey: "signin_mutation",
    mutationFn: handleOnSubmit,
    onSuccess: handleOnSuccess,
    onError: handleOnError,
  });

  if (mutation.isLoading) {
    dispatch(showLoader());
  }

  if (mutation.isSuccess || mutation.isError) {
    dispatch(hideLoader());
  }

  //#[Form] hooks and variables.
  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(signinSchema),
  });

  const { errors } = formState;

  //#[Functions]
  function handleIsSecret() {
    setIsSecret((prev) => !prev);
  }

  //#[Functions][Form]
  function submit(data: FormDataProps) {
    mutation.mutate(data);
  }

  //#region [Functions][Mutation]
  function handleOnSubmit(data: FormDataProps) {
    Keyboard.dismiss();
    return users.getUserByEmailAndPassword(data.email, data.password);
  }

  function handleOnSuccess(data: UserResponseModel) {
    dispatch(handleUserData(data));
    navigation.navigate("HomeScreen");
  }

  function handleOnError(error: ResponseErrorType) {
    toast.show({
      placement: 'top',
      render: () => Toast({ message: error.response.data as string, type: 'error' })
    });
  }

  return {
    isSecret,
    handleIsSecret,
    control,
    submit,
    errors,
    handleSubmit
  }
}