import styled from 'styled-components';
import { colorsVariables } from './../../Style/ColorsVariables';
export const ResumeListsCard = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  span {
    margin-right: 5px;
    color: ${colorsVariables.darkBlue};
    font-weight: 600;
  }
  h2 {
    margin-bottom: 10px;
    font-weight: 400;
    color: ${colorsVariables.greyishBlue};
    padding-bottom: 10px;
    border-bottom: ${colorsVariables.borderFormResume};
  }
  h3 {
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
  }
  p {
    width: 100%;
    text-align: justify;
  }
`;
