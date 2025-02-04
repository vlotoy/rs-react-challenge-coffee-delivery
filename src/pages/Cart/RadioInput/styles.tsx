import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

interface ContainerProps {
  $checked: boolean;
}

export const Container = styled.label<ContainerProps>`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: ${({ $checked, theme }) =>
    $checked ? `1px solid ${theme.colors['purple']}` : 'none'};
  border-radius: 6px;
  background: ${({ $checked, theme }) =>
    $checked ? theme.colors['purple-light'] : theme.colors['base-button']};
  text-transform: uppercase;
  ${mixins.fonts.buttonM};

  &:hover {
    cursor: pointer;
    background: ${({ $checked, theme }) =>
      $checked ? theme.colors['purple-light'] : theme.colors['base-hover']};
  }

  > input {
    display: none;
  }
`;
