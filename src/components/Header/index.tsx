import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Aside, CartCounter, HeaderContainer } from './styles';

import headerLogo from '../../assets/headerLogo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={headerLogo} alt="" />
      </NavLink>
      <Aside>
        <span>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={38} weight="fill" />
          <CartCounter visible={true}>0</CartCounter>
        </NavLink>
      </Aside>
    </HeaderContainer>
  );
}
