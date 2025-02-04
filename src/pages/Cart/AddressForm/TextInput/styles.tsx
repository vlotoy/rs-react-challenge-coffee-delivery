import styled from 'styled-components';

export const TextInputContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-input']};

  &:focus-within {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['yellow-dark']};
  }

  transition: all 0.2s;

  > input {
    width: 100%;
    padding: 0.75rem;

    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  > span {
    padding-right: 0.75rem;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-label']};
    font-style: italic;
  }
`;

export const ErrorMessage = styled.p``;
