import styled from 'styled-components';
import { mixins } from '../../../../styles/mixins';

export const CoffeeContainer = styled.div`
  width: 16rem;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;

  > img {
    margin-top: -1.25rem;
  }

  > h2 {
    ${mixins.fonts.titleS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > p {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-label']};
    text-align: center;
  }
`;

export const CoffeeFooter = styled.footer`
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;

  > span:first-child {
    ${mixins.fonts.textS}
  }

  > span + span {
    ${mixins.fonts.titleM}
  }
`;

export const QuantityCheck = styled.div<{ $itemAdded: boolean }>`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 0.5rem;
    display: flex;
    border-radius: 8px;

    background: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow'] : theme.colors['purple-dark']};
    transition: background 0.1s;

    &:hover {
      background: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple']};
    }
  }
`;
