import styled from 'styled-components';
import { colorsVariables } from './../../Style/ColorsVariables';
export const FormContainer = styled.form`
  display: flex;
  background-color: ${colorsVariables.white};
  border-radius: 15px;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 400px;
  margin: 0px auto;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const TitleForm = styled.h1`
  text-align: center;
  margin: 10px auto;
  width: 400px;
  font-size: 25px;
  font-weight: lighter;
  background-color: ${colorsVariables.darkBlue};
  padding: 10px;
  border-radius: 15px;
  box-shadow: ${colorsVariables.boxShadow};
  svg {
    color: ${colorsVariables.lightBlue};
  }
`;

export const FieldContainer = styled.div`
  margin: 10px 0;
  input {
    width: 300px;
    border: ${colorsVariables.borderFormResume};
    border-radius: 10px;
    outline: none;
    padding: 10px;
    font-family: 'Quicksand', sans-serif;
    :focus {
      border: ${colorsVariables.borderFormResumeFocus};
    }
    ::placeholder {
      padding-left: 10px;
      font-size: 16px;
      color: ${colorsVariables.greyishBlue};
    }
  }
`;

export const ErrorMessage = styled.div`
  color: ${colorsVariables.red};
  span {
    display: flex;
    align-items: center;
  }
  svg {
    margin: 5px;
  }
`;

export const GenderSelection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  label {
    color: ${colorsVariables.greyishBlue};
    margin-right: 10px;
    font-weight: 500;
    font-size: 16px;
  }
  select {
    border-radius: 10px;
    background-color: ${colorsVariables.greyishBlue};
    color: ${colorsVariables.white};
    height: 30px;
    outline: none;
    width: 90px;
    :focus {
      border: ${colorsVariables.borderSelectFocus};
    }
  }
  option {
    background-color: ${colorsVariables.white};
    color: ${colorsVariables.greyishBlue};
    border: ${colorsVariables.borderFormResume};
  }
`;

export const GroupFormStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  input {
    margin: 0 5px;
    width: 145px;
  }
  label {
    width: 50px;
  }
`;

export const ExpertiseStyle = styled.textarea`
  width: 300px;
  height: 150px;
  border: ${colorsVariables.borderFormResume};
  border-radius: 10px;
  outline: none;
  margin: 10px;
  padding: 10px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;

  :focus {
    border: ${colorsVariables.borderFormResumeFocus};
  }
  ::placeholder {
    padding-left: 10px;
    font-size: 16px;
    color: ${colorsVariables.greyishBlue};
    font-family: 'Quicksand', sans-serif;
  }
`;

export const SubmitButton = styled.input`
  width: 50%;
  height: 35px;
  border: ${colorsVariables.borderFormResumeFocus};
  border-radius: 10px;
  margin: 10px;
  background-color: ${colorsVariables.blue};
  transition: 0.5s ease-out;
  color: ${colorsVariables.darkBlue};
  :hover {
    transform: scale(1.1);
    transition: 0.5s ease-out;
  }
  :disabled {
    opacity: 0.5;
  }
`;
