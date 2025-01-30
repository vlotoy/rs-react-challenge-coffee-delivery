import styled from 'styled-components';
import { mixins } from '../../../../../styles/mixins';

export const InputContainer = styled.div`
  width: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-title']};

  ${mixins.fonts.textM}

  > button {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors['purple']};
    background: ${({ theme }) => theme.colors['base-button']};

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`;
