import { Box, HStack } from "native-base";
import { Controller } from "react-hook-form";
import { Button } from "../../../components/Button/Button.view";
import { Input } from "../../../components/Input/Input.view";
import { creditCardNumberMask, monthYearMask } from "../../../utils/masks";
import { FormPropsType } from "./schema";

export function AddCardForm({
  control,
  errors,
  handleSubmit,
  submitForm,
}: FormPropsType) {
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={(text) => onChange(creditCardNumberMask(text))}
            placeholder="Número do cartão"
            keyboardType="number-pad"
            returnKeyType="done"
            maxLength={19}
          />
        )}
      />
      <Controller
        control={control}
        name="ownerName"
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={(text) => onChange(text.toUpperCase())}
            placeholder="Nome do titular"
            returnKeyType="done"
          />
        )}
      />

      <HStack w="full">
        <Box flex={1} paddingRight={5}>
          <Controller
            control={control}
            name="validThru"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={(text) => onChange(monthYearMask(text))}
                placeholder="Data de validade"
                returnKeyType="done"
                keyboardType="numeric"
                maxLength={5}
              />
            )}
          />
        </Box>

        <Box flex={1}>
          <Controller
            control={control}
            name="cvv"
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChangeText={(text) => onChange(creditCardNumberMask(text))}
                placeholder="CVV"
                keyboardType="number-pad"
                returnKeyType="done"
                maxLength={3}
              />
            )}
          />
        </Box>
      </HStack>

      <Button title="Adicionar" titleColor="white" />
    </>
  );
}
