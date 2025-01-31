import { Minus, Plus } from '@phosphor-icons/react';

import { InputContainer } from './styles';

interface QuantityInputProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  isItemAdded: boolean;
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
  isItemAdded,
}: QuantityInputProps) {
  return (
    <InputContainer>
      <button onClick={decrementQuantity} disabled={isItemAdded}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity} disabled={isItemAdded}>
        <Plus />
      </button>
    </InputContainer>
  );
}
