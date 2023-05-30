import { Control, Controller, FieldValues } from "react-hook-form";
import { Input } from "../Input/Input.view";

type Props<T> = {
  control: Control<T extends FieldValues ? FieldValues : any>;
  name: string;
  errorMessage: string;
  placeHolder: string;
  autoCaptalize?: "none" | "sentences" | "words" | "characters";
};

export function InputForm<T>({
  control,
  name,
  errorMessage,
  placeHolder,
  autoCaptalize,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          autoCapitalize={autoCaptalize}
          onChangeText={onChange}
          placeholder={placeHolder}
          fontSize={15}
          height={12}
          errorMessage={errorMessage}
        />
      )}
    />
  );
}
