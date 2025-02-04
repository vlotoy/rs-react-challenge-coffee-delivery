import styled from 'styled-components';
import { mixins } from '../../../styles/mixins';

export const HeadingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  div > p {
    ${mixins.fonts.textM}
  }

  div > span {
    ${mixins.fonts.textS}
  }
`;
