import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import { ErrorMessage, TextInputContainer } from './styles';
import { FieldError } from 'react-hook-form';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  error?: FieldError;
  gridArea:
    | 'zipCode'
    | 'street'
    | 'number'
    | 'optional'
    | 'neighborhood'
    | 'city'
    | 'state';
}

export const TextInput = forwardRef(function TextInput(
  { optional, error, gridArea, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <>
      <TextInputContainer style={{ gridArea: gridArea }}>
        <input type="text" ref={ref} {...rest} />
        {optional && <span>Opcional</span>}
      </TextInputContainer>

      {error?.message ? <ErrorMessage>{error?.message}</ErrorMessage> : null}
    </>
  );
});
