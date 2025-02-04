import { FieldError, useFormContext } from 'react-hook-form';
import { AddressFormContainer } from './styles';
import { TextInput } from './TextInput';

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // const [zipCode, setZipCode] = useState('');
  console.log(errors);

  return (
    <AddressFormContainer>
      <TextInput
        gridArea="zipCode"
        placeholder="CEP"
        maxLength={8}
        // value={zipCode}
        error={errors.zipCode as FieldError}
        {...register('zipCode', {
          // onChange: (e: ChangeEvent<HTMLInputElement>) =>
          //   setZipCode(
          //     e.target.value
          //       .replace(/^\D*/g, '')
          //       .replace(/(\d{5})(\d{3})/g, '$1-$2')
          //   ),
          valueAsNumber: true,
        })}
      />
      <TextInput
        gridArea="street"
        placeholder="Rua"
        error={errors.street as FieldError}
        {...register('street')}
      />

      <TextInput
        gridArea="number"
        placeholder="Número"
        error={errors.number as FieldError}
        {...register('number')}
      />

      <TextInput
        gridArea="optional"
        placeholder="Complemento"
        optional
        error={errors.optional as FieldError}
        {...register('optional')}
      />

      <TextInput
        gridArea="neighborhood"
        placeholder="Bairro"
        error={errors.neighborhood as FieldError}
        {...register('neighborhood')}
      />

      <TextInput
        gridArea="city"
        placeholder="Cidade"
        error={errors.city as FieldError}
        {...register('city')}
      />

      <TextInput
        gridArea="state"
        placeholder="UF"
        maxLength={2}
        error={errors.state as FieldError}
        {...register('state')}
      />
    </AddressFormContainer>
  );
}
