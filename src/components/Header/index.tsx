import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Aside, CartCounter, HeaderContainer } from './styles';

import headerLogo from '../../assets/headerLogo.svg';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useTheme } from 'styled-components';

export function Header() {
  const { cart } = useCart();
  const theme = useTheme();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={headerLogo} alt="" />
      </NavLink>
      <Aside>
        <span>
          <MapPin size={22} color={theme.colors['purple']} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to="/carrinho" title="Checkout">
          <ShoppingCart size={38} weight="fill" />
          <CartCounter $visible={!!cart.length}>{cart.length}</CartCounter>
        </NavLink>
      </Aside>
    </HeaderContainer>
  );
}
