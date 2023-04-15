import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from './../../../src/assets/image1.png';
import { NavbarContainer, NavLogoContainer } from './NavBarStyle';

interface NavBarProps {
  open: boolean;
}

export const NavBar = ({ open }: NavBarProps) => {
  return (
    <NavbarContainer open={open}>
      <NavLogoContainer>
        <img src={logo} alt="illustration looking for resumes" />
      </NavLogoContainer>

      <ul>
        <motion.li whileTap={{ scale: 1.1 }}>
          <Link to="/form-resume">Register Now</Link>
        </motion.li>
        <motion.li whileTap={{ scale: 1.1 }}>
          <Link to="/">Resumes</Link>
        </motion.li>
      </ul>
    </NavbarContainer>
  );
};
