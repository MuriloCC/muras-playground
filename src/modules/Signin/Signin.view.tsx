import { Heading, KeyboardAvoidingView, Text, VStack } from "native-base";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import Form from "./Forms/SigninForm/form";
import useSigninViewModel from "./Signin.viewmodel";

export default function SigninView() {
  const { handleIsSecret, isSecret, control, errors, handleSubmit, submit } =
    useSigninViewModel();

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

          <Form
            control={control}
            errors={errors}
            handleIsSecret={handleIsSecret}
            handleSubmit={handleSubmit}
            isSecret={isSecret}
            submitForm={submit}
          />
        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
