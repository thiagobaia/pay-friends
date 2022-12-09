import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup.string().required('Campo Obrigatorio'),
    password: yup.string().required('Campo Obrigatorio'),
  
});

export type FormItems = {
    email: string;
    senha: string;
  };




//   import * as yup from "yup";

// const passwordRules = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
// // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// export const schema = yup.object().shape({
//     email: yup.string().required("Required field"),
//     password: yup
//         .string()
//         .min(5)
//         .matches(passwordRules, { message: "Please create a stronger password" })
//         .required("Required field"),
//     confirmPassword: yup
//         .string()
//         .oneOf([yup.ref("password"), null], "Password must match")
//         .required("Required field"),
// });

// export type FormItems = {
//     email: string;
//     senha: string;
// };
