import styled from 'styled-components';
import { colorsVariables } from './../../Style/ColorsVariables';
export const HeaderContainer = styled.div`
  position: fixed;
  height: 90px;
  width: 100%;
  top: 0;
  left: 0;
  margin-bottom: 30px;
  background-image: ${colorsVariables.backgroundGradient};
`;
