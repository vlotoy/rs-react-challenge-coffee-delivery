import { Minus, Plus } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { InputContainer } from './styles';

export function QuantityInput() {
  const theme = useTheme();

  return (
    <InputContainer>
      <button>
        <Minus />
      </button>
      <span>1</span>
      <button>
        <Plus />
      </button>
    </InputContainer>
  );
}
