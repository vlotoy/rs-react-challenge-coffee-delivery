import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { CartCounter, HeaderContainer } from './styles';

import headerLogo from '../../assets/headerLogo.png';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} alt="" />
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={38} weight="fill" />
          <CartCounter visible={true}>0</CartCounter>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
