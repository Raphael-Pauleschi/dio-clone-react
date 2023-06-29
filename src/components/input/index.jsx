import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";

const Input = ({ leftIcon, name, errorMessage, ...rest }) => {
  return (
    <>
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <InputText {...rest} />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
