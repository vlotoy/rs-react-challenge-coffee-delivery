import { useEffect, useState } from 'react';
import { CheckFat, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { Tags } from '../Tags';
import { QuantityInput } from './QuantityInput';

import { CoffeeContainer, CoffeeFooter, Price, QuantityCheck } from './styles';

import { Coffee } from '..';
import { useCart } from '../../../../hooks/useCart';
import { CartItemType } from '../../../../reducers/cart/reducer';

interface CoffeeItemProps {
  coffee: Coffee;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const theme = useTheme();
  const { cart, addItem, removeItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  useEffect(() => {
    if (cart.length) {
      const cartWithItensAdded = cart.filter((item) => item.id === coffee.id);

      cartWithItensAdded.map((item) => {
        setQuantity(item.quantity);
        setIsItemAdded(true);
      });
    }
  }, [cart, coffee]);

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    const newItem: CartItemType = {
      id: coffee.id,
      quantity,
    };

    addItem(newItem);
    setIsItemAdded(true);
  }

  function handleRemoveItem() {
    const itemToRemove: CartItemType = {
      id: coffee.id,
      quantity,
    };
    removeItem(itemToRemove.id);
    setIsItemAdded(false);
    setQuantity(1);
  }

  return (
    <CoffeeContainer>
      <img src={coffee.image} alt={coffee.name} />

      <Tags tags={coffee.tags} />

      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>

      <CoffeeFooter>
        <Price>
          <span>R$</span>
          <span>
            {new Intl.NumberFormat('pt-br', {
              minimumFractionDigits: 2,
            }).format(coffee.price)}
          </span>
        </Price>
        <QuantityCheck $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
            isItemAdded={isItemAdded}
          />
          <button onClick={isItemAdded ? handleRemoveItem : handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors['base-card']} />
            )}
          </button>
        </QuantityCheck>
      </CoffeeFooter>
    </CoffeeContainer>
  );
}
