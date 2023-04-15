import { useState } from 'react';
import BurguerButton from '../../components/BurguerButton/BurguerButton';
import { NavBar } from '../../components/NavBar/NavBar';
import { HeaderContainer } from './HeaderStyle';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <NavBar open={open} />
      <BurguerButton open={open} onOpen={setOpen} />
    </HeaderContainer>
  );
};

export default Header;
