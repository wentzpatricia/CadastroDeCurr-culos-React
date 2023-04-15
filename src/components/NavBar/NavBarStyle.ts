import styled from 'styled-components';
import { moveUp } from './../../Style/Animation';
import { colorsVariables } from './../../Style/ColorsVariables';
export const NavbarContainer = styled.nav<{ open: boolean }>`
  animation-name: ${moveUp};
  animation-duration: 0.7s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }
  ul li {
    margin-right: 10px;
    padding: 5px;
    color: ${colorsVariables.darkBlue};
  }
  @media (max-width: 768px) {
    ul {
      flex-flow: column;
      background-color: ${colorsVariables.white};
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      transition: ${({ open }) =>
        open ? 'transform 0.3s ease-in-out' : 'transform 0'};
    }
    ul li {
      color: #171940;
      :hover {
        color: #171940;
      }
    }
    ul li {
      margin-top: 15px;
      padding: 10px;
      :hover {
        background-color: ${colorsVariables.lightBlue};
      }
    }
  }
`;

export const NavLogoContainer = styled.div`
  padding: 10px;
  img {
    width: 75px;
  }
`;
