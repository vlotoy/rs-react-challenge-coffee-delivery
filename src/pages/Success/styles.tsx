import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.main`
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 10rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Heading = styled.div`
  h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['yellow-dark']}
  }

  p {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mixins.fonts.textM}

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      border-radius: 50%;
      padding: 0.5rem;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
