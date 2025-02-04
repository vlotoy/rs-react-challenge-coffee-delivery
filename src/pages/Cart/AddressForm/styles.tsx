import styled from 'styled-components';

export const AddressFormContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number optional optional'
    'neighborhood city state';
`;
