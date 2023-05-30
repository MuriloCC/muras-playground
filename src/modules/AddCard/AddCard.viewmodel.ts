import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddCardFormData } from "./AddCard.model";
import { addCardFormSchema } from "./Forms/schema";


export default function useAddCardViewModel() {
  const { control, handleSubmit, formState } = useForm<AddCardFormData>({
    resolver: yupResolver(addCardFormSchema),
  });

  const { errors } = formState

  function submit(data: AddCardFormData) {

  }

  return {
    control, handleSubmit, errors, submit
  }
}