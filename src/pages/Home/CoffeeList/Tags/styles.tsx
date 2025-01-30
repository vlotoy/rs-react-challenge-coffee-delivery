import styled from 'styled-components';
import { mixins } from '../../../../styles/mixins';

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  > span {
    padding: 0.375rem 0.75rem;
    border-radius: 100px;

    ${mixins.fonts.tag}
    background: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    text-transform: uppercase;
  }
`;
