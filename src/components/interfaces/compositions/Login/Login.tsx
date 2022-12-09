import React, { useState } from "react";
import { LoginArgsModel } from "./Login.model";
import { Input } from "../../../elements/Input/Input";
import { Button } from "../../../elements/Button/Button";
import { useFormik } from "formik";
import { schema } from "./validate";

export const Login: React.FC<LoginArgsModel> = ({InputEmail, InputPassword, ButtonPrimary}:LoginArgsModel) => {
  const [showErrors, setShowErrors] = useState(false);

  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      console.log(values);
      console.log(actions);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
    },
  });

  const handleCreateNewTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowErrors(true);

    handleSubmit(e);
  };

  return (
    <div className="w-full flex justify-center bg-gray-800">
      <form
        className="w-80 flex gap-y-6 flex-col"
        onSubmit={handleCreateNewTransaction}
      >
        <Input
          type={InputEmail.type}
          label={InputEmail.label}
          id={InputEmail.id}
          placeholder={InputEmail.placeholder}
          value={values.email}
          name={InputEmail.name}
          onChange={handleChange}
          helperText={showErrors ? errors.email : ""}
          error={errors.email && touched.email ? true : false}
          onBlur={handleBlur}
        ></Input>

        <Input
          type={InputPassword.type}
          label={InputPassword.label}
          id={InputPassword.id}
          value={values.password}
          name={InputPassword.name}
          placeholder={InputPassword.placeholder}
          onChange={handleChange}
          helperText={showErrors ? errors.password : ""}
          error={errors.password && touched.password ? true : false}
          onBlur={handleBlur}
        ></Input>

        <Button
          disabled={isSubmitting}
          label={ButtonPrimary.label}
          variant={ButtonPrimary.variant}
          labelSize={ButtonPrimary.labelSize}
          type={ButtonPrimary.type}
        ></Button>
      </form>
    </div>
  );
};
