import styled from 'styled-components';
import { colorsVariables } from './../../Style/ColorsVariables';

export const TitleResume = styled.h2`
  margin: 30px auto;
  text-align: center;
  font-size: 45px;
  font-weight: 400;
  padding-bottom: 10px;
  width: 35%;
  border-bottom: ${colorsVariables.borderBottomWhite};
`;
export const ContainerResumeList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const InformationResumes = styled.div`
  background-color: ${colorsVariables.white};
  color: ${colorsVariables.darkBlue};
  width: 360px;
  margin: 30px;
  border-radius: 10px;
  box-shadow: ${colorsVariables.boxShadow};
`;

export const ResumeListEmptyStyle = styled.div`
  display: flex;
  background-color: ${colorsVariables.white};
  border-radius: 15px;
  width: 400px;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  box-shadow: ${colorsVariables.boxShadow};
  h3 {
    color: ${colorsVariables.greyishBlue};
    margin: 20px 0;
    font-weight: 400;
    font-size: 30px;
    padding-bottom: 8px;
    border-bottom: ${colorsVariables.borderFormResume};
  }
`;

export const BtnAddNow = styled.button`
  margin: 20px;
  padding: 10px;
  background-color: ${colorsVariables.greyishBlue};
  border: none;
  border-radius: 10px;
  a {
    color: ${colorsVariables.white};
  }
`;
export const BtnExport = styled.button`
  margin: 10px 10px;
  background-color: transparent;
  border: none;
  transition: all 0.5s;
  svg {
    font-size: 20px;
    color: ${colorsVariables.green};
  }
  :hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`;

export const BtnRemove = styled.button`
  margin: 10px 10px;
  background-color: transparent;
  border: none;
  transition: all 0.5s;
  svg {
    font-size: 20px;
    color: ${colorsVariables.red};
  }
  :hover {
    transform: scale(1.2);
    transition: all 0.5s;
  }
`;
