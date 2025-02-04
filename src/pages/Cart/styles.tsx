import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const CartContainer = styled.main`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 10rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

export const InfoContainer = styled.div`
  max-width: 40rem;
  width: 100%;

  h3 {
    ${mixins.fonts.titleXS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const CardContainer = styled.div`
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};
`;

export const RadioInputContainer = styled(InfoContainer)`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`;

export const CartListContainer = styled.div`
  max-width: 28rem;
  width: 100%;

  h3 {
    ${mixins.fonts.titleXS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;

export const CartItemContainer = styled(CardContainer)`
  padding: 0 2.5rem;
  border-radius: 6px 36px;
`;

export const Total = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
  }

  > :last-child {
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

export const SubmitButton = styled.div`
  padding-bottom: 2.5rem;

  button {
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['yellow']};
    color: ${({ theme }) => theme.colors['white']};
    text-transform: uppercase;
    ${mixins.fonts.buttonG}
  }
`;
