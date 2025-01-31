import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const CoffeeListContainer = styled.section`
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const CoffeeListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`;

export const FilterContainer = styled.aside`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 0.375rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
    border-radius: 100px;

    ${mixins.fonts.tag}
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors['background']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`;

export const Coffees = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem 2rem;
`;
