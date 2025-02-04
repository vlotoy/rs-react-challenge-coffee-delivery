import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  > img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    p {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      ${mixins.fonts.textM}
    }
  }

  > div > div {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    > button {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.1rem;

      border-radius: 6px;
      background: ${({ theme }) => theme.colors['base-button']};
      ${mixins.fonts.buttonM}
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  > span {
    font-weight: bold;
  }
`;
