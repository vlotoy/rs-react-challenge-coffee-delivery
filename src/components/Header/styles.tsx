import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const HeaderContainer = styled.header`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  font-size: 0.875rem;
  line-height: 1.3;

  a > svg {
    padding: 0.5rem;

    display: flex;

    border-radius: 8px;
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  > span {
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-radius: 8px;
    background: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`;

interface CartCounterProps {
  $visible: boolean;
}

export const CartCounter = styled.span<CartCounterProps>`
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0px;
  right: 0px;
  transform: translate(50%, -50%);

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors['yellow-dark']};
  color: ${(props) => props.theme.colors['white']};

  ${mixins.fonts.textS}
  font-weight: bold;
`;
