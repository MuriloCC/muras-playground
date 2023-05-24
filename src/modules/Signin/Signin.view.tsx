import { FontAwesome } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  Icon,
  KeyboardAvoidingView,
  Pressable,
  Text,
  VStack,
  useToast,
} from "native-base";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { useMutation } from "react-query";
import * as yup from "yup";
import { Button } from "../../components/Button/Button.view";
import { Input } from "../../components/Input/Input.view";
import { useAppDispatch } from "../../redux/app/hooks";
import { hideLoader, showLoader } from "../../redux/global/globalSlice";
import { handleUserData } from "../../redux/user/userSlice";
import { users } from "../../services/user";
import { FormDataProps, SigninViewNavigationType } from "./Signin.model";

const signinSchema = yup.object<FormDataProps>({
  email: yup.string().required("Informe o Email").email(),
  password: yup.string().required("Informe a Senha"),
});

export default function SigninView() {
  const [isSecret, setIsSecret] = useState(true);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<SigninViewNavigationType>();

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(signinSchema),
  });

  const { errors } = formState;

  function submitForm(data: FormDataProps) {
    mutation.mutate(data);
  }

  const mutation = useMutation(
    (data: FormDataProps) => {
      Keyboard.dismiss();
      dispatch(showLoader());
      return users.getUserByEmailAndPassword(data.email, data.password);
    },
    {
      onSuccess: (data) => {
        dispatch(handleUserData({ ...data, isLogged: !!data.accessToken }));
        dispatch(hideLoader());
        navigation.navigate("HomeScreen");
      },
      onError: (error: { response: { data: any } }) => {
        dispatch(hideLoader());
        toast.show({
          placement: "top",
          render: () => (
            <Box
              alignItems="center"
              flexDir="row"
              bg="red.500"
              px="5"
              py="5"
              rounded="sm"
            >
              <Icon
                color="white"
                as={<FontAwesome name="warning" />}
                size={7}
                mr={4}
              />
              <Text color="white">{error.response.data}</Text>
            </Box>
          ),
        });
      },
    },
  );

  function handleIsSecret() {
    setIsSecret((prev) => !prev);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      padding={6}
      flex={1}
      w="full"
    >
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <VStack flex={1} justifyContent="center">
          <Heading size="2xl" textAlign="center">
            Login
          </Heading>

          <Text textAlign="center">
            {" "}
            Preencha os campos corretamente para entrar{" "}
          </Text>
          <Box marginY={6}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  autoCapitalize="none"
                  onChangeText={onChange}
                  InputLeftElement={
                    <Icon as={<FontAwesome name="user" />} size={5} ml={3} />
                  }
                  placeholder="Email"
                  fontSize={15}
                  height={12}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={isSecret}
                  InputLeftElement={
                    <Icon as={<FontAwesome name="lock" />} size={5} ml={3} />
                  }
                  InputRightElement={
                    <Pressable onPress={handleIsSecret}>
                      <Icon
                        as={
                          <FontAwesome name={isSecret ? "eye-slash" : "eye"} />
                        }
                        size={5}
                        mr={3}
                      />
                    </Pressable>
                  }
                  fontSize={15}
                  placeholder="Password"
                  height={12}
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </Box>
          <Button
            title="Entrar"
            titleColor="white"
            onPress={handleSubmit(submitForm)}
            height={12}
          />
        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
