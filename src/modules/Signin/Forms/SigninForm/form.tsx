import { FontAwesome } from "@expo/vector-icons";
import { Box, Icon, Pressable } from "native-base";
import { Controller } from "react-hook-form";
import { Button } from "../../../../components/Button/Button.view";
import { Input } from "../../../../components/Input/Input.view";
import { FormPropsType } from "./schema";

export default function Form({
  control,
  errors,
  isSecret,
  handleIsSecret,
  handleSubmit,
  submitForm,
}: FormPropsType) {
  return (
    <>
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
                    as={<FontAwesome name={isSecret ? "eye-slash" : "eye"} />}
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
    </>
  );
}
