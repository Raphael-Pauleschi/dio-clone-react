import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          rule={{ required: true }}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
