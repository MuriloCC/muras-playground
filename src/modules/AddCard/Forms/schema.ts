import * as yup from "yup";
import { DefaultFormPropsType } from "../../../common/model/FormModel";
import { AddCardFormData } from "../AddCard.model";

export const addCardFormSchema = yup.object<AddCardFormData>({
  cardNumber: yup.string().matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Número do cartão inválido'),
  ownerName: yup.string().required("O nome do titular é obrigatório"),
  validThru: yup.date().required("A data de validade é obrigatória"),

});

export interface FormPropsType extends DefaultFormPropsType<AddCardFormData> {
}