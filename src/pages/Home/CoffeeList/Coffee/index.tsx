import { ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { CoffeeContainer, CoffeeFooter, Price, QuantityCheck } from './styles';
import { Tags } from '../Tags';
import { QuantityInput } from './QuantityInput';

export function Coffee({ coffee }) {
  const theme = useTheme();
  return (
    <CoffeeContainer>
      <img src={coffee.image} alt={coffee.name} />

      <Tags tags={coffee.tags} />

      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>

      <CoffeeFooter>
        <Price>
          <span>R$</span>
          <span>{coffee.price}</span>
        </Price>
        <QuantityCheck>
          <QuantityInput />
          <button type="button">
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme.colors['white']}
            />
          </button>
        </QuantityCheck>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}
