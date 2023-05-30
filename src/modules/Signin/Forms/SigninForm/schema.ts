import * as yup from "yup";
import { DefaultFormPropsType } from "../../../../common/model/FormModel";
import { FormDataProps } from "../../Signin.model";

export const signinSchema = yup.object<FormDataProps>({
  email: yup.string().required("Informe o Email").email("formato do email invalido"),
  password: yup.string().required("Informe a Senha").min(8, "minimo 8 caracteres"),
});

export interface FormPropsType extends DefaultFormPropsType<FormDataProps> {
  isSecret: boolean,
  handleIsSecret: () => void,
}