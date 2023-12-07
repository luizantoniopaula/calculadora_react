import { ButtonContainer, ButtonContainerEq } from "./styles";

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" >
        {label}
      </ButtonContainer>
    );
  }
  
  const Buttoneq = ({label, onClick}) => {
    return (
      <ButtonContainerEq onClick={onClick} type="button" >
        {label}
      </ButtonContainerEq>
    );
  }
  
  export {Button}
  export {Buttoneq}
