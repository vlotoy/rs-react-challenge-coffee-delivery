import { Trash } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { CartItemType } from '../../../reducers/cart/reducer';
import { Coffee } from '../../Home/CoffeeList';
import { QuantityInput } from '../../Home/CoffeeList/CoffeeItem/QuantityInput';

import { Container } from './styles';
import { useCart } from '../../../hooks/useCart';

interface CartItemProps {
  item: CartItemType & Coffee;
}

export function CartItem({ item }: CartItemProps) {
  const { handleIncrementQuantity, handleDecrementQuantity, removeItem } =
    useCart();
  const theme = useTheme();
  return (
    <Container>
      <img src={item.image} alt="" />
      <div>
        <p>{item.name}</p>
        <div>
          <QuantityInput
            quantity={item.quantity}
            incrementQuantity={() => handleIncrementQuantity(item.id)}
            decrementQuantity={() => handleDecrementQuantity(item.id)}
          />
          <button onClick={() => removeItem(item.id)}>
            <Trash size={16} color={theme.colors['purple']} />
            Remover
          </button>
        </div>
      </div>
      <span>
        {new Intl.NumberFormat('pt-br', {
          currency: 'BRL',
          style: 'currency',
        }).format(item.price)}
      </span>
    </Container>
  );
}
