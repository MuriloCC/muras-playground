import * as yup from "yup";
import { DefaultFormPropsType } from "../../../../common/model/FormModel";
import { FormDataProps } from "../../Signin.model";

export const signinSchema = yup.object<FormDataProps>({
  email: yup.string().required("Informe o Email").email("Email inválido"),
  password: yup.string().required("Informe a Senha"),
});

export interface FormPropsType extends DefaultFormPropsType<FormDataProps> {
  isSecret: boolean,
  handleIsSecret: () => void,
}