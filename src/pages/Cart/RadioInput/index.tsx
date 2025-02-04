import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import { Container } from './styles';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  children: ReactNode;
}

export const RadioInput = forwardRef(function RadioInput(
  { children, checked, ...rest }: RadioInputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <Container $checked={checked}>
      <input type="radio" checked={checked} ref={ref} {...rest} />
      {children}
    </Container>
  );
});
