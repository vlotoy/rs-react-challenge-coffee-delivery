import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const IntroContainer = styled.section`
  position: relative;
  padding: 5.75rem 18rem;

  display: flex;
  align-items: center;

  img#intro-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.5rem;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors['base-title']}
  }

  div > p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors['base-text']};
`;

export const Item = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors['white']};
  }
`;
