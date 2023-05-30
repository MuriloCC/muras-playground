import { Control, FieldErrors, FieldValues, UseFormHandleSubmit } from "react-hook-form";

export interface DefaultFormPropsType<T extends FieldValues> {
  control: Control<T, any>,
  errors: FieldErrors<T>,
  submitForm(data: T): void,
  handleSubmit: UseFormHandleSubmit<T>
}