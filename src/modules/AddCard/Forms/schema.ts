import * as yup from "yup";
import { DefaultFormPropsType } from "../../../common/model/FormModel";
import { AddCardFormData } from "../AddCard.model";

export const addCardFormSchema = yup.object<AddCardFormData>({
  cardNumber: yup.string().required('O Número do cartão é obrigatório!').matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Número do cartão inválido'),
  ownerName: yup.string().required("O nome do titular é obrigatório!"),
  validThru: yup.string().required("A data de validade é obrigatória!"),
  cvv: yup.number().required("O Código de verificação é obrigatório!")
});

export interface FormPropsType extends DefaultFormPropsType<AddCardFormData> {
}