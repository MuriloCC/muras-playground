import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string;
};

export function Input({ errorMessage, ...rest }: Props) {
  return (
    <FormControl isInvalid={!!errorMessage} mb={4}>
      <NativeBaseInput
        fontSize="md"
        h={12}
        isInvalid={!!errorMessage}
        _focus={{ bg: "transparent" }}
        {...rest}
      />
      <FormControl.ErrorMessage alignItems="center" flexDir="row">
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
