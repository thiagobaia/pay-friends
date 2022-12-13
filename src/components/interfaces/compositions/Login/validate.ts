import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Campo Obrigatorio"),
  password: yup.string().required("Campo Obrigatorio"),
});

export type FormItems = {
  email: string;
  senha: string;
};