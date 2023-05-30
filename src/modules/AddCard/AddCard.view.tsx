import { Heading, KeyboardAvoidingView, VStack } from "native-base";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import useAddCardViewModel from "./AddCard.viewmodel";
import { AddCardForm as Form } from "./Forms/form";

export default function AddCard() {
  const { control, errors, handleSubmit, submit } = useAddCardViewModel();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      padding={6}
      flex={1}
      w="full"
    >
      <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <VStack flex={1}>
          <Heading mb={5}>Adicionar cartão</Heading>
          <Form
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            submitForm={submit}
          />
        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
