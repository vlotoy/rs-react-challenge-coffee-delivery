import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
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
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  nav > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
  }
`;

export const CartCounter = styled.span<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -20%;
  right: -5%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
`;
