import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bank, CreditCard, Money } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { AddressForm } from './AddressForm';
import { Heading } from './Heading';
import { RadioInput } from './RadioInput';
import { CartItem } from './CartItem';

import {
  CartContainer,
  CartListContainer,
  CardContainer,
  InfoContainer,
  RadioInputContainer,
  CartItemContainer,
  Total,
  SubmitButton,
} from './styles';

import coffees from '../../coffees.json';
import { useCart } from '../../hooks/useCart';

export const NewAddressFormValidationSchema = z.object({
  zipCode: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1),
  optional: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe o estado').max(2),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
});

export type OrderInfo = z.infer<typeof NewAddressFormValidationSchema>;

export function Cart() {
  const theme = useTheme();
  const { cart, createNewOrder } = useCart();

  const newAddressForm = useForm<OrderInfo>({
    resolver: zodResolver(NewAddressFormValidationSchema),
  });

  const { handleSubmit, reset, register, watch } = newAddressForm;

  const selectedPaymentMethod = watch('paymentMethod');

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.');
    }

    return { ...coffeeInfo, quantity: item.quantity };
  });

  function handleCreateNewOrder(data: OrderInfo) {
    if (!cart.length) {
      return alert('O carrinho está vazio!');
    }

    const newOrder = {
      ...data,
      id: new Date().getTime(),
      items: cart,
    };

    createNewOrder(newOrder);
    reset();
  }

  const shipping = 3.5;
  const totalItens = coffeesInCart.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return (
    <CartContainer>
      <InfoContainer>
        <h3>Complete seu pedido</h3>
        <CardContainer>
          <Heading
            isAddress
            title="Endereço de entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          />
          <form id="order" onSubmit={handleSubmit(handleCreateNewOrder)}>
            <FormProvider {...newAddressForm}>
              <AddressForm />
            </FormProvider>
          </form>
        </CardContainer>

        <CardContainer>
          <Heading
            isAddress={false}
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <RadioInputContainer>
            <RadioInput
              value="credit"
              checked={selectedPaymentMethod === 'credit'}
              {...register('paymentMethod')}
            >
              <CreditCard size={16} color={theme.colors['purple']} />
              Cartão de crédito
            </RadioInput>
            <RadioInput
              value="debit"
              checked={selectedPaymentMethod === 'debit'}
              {...register('paymentMethod')}
            >
              <Bank size={16} color={theme.colors['purple']} />
              Cartão de débito
            </RadioInput>
            <RadioInput
              value="cash"
              checked={selectedPaymentMethod === 'cash'}
              {...register('paymentMethod')}
            >
              <Money size={16} color={theme.colors['purple']} />
              Dinheiro
            </RadioInput>
          </RadioInputContainer>
        </CardContainer>
      </InfoContainer>

      <CartListContainer>
        <h3>Cafés selecionados</h3>
        <CartItemContainer>
          {coffeesInCart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Total>
            <div>
              <span>Total de itens</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItens)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(shipping)}
              </span>
            </div>
            <div>
              <p>Total</p>
              <p>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalItens + shipping)}
              </p>
            </div>
          </Total>

          <SubmitButton>
            <button type="submit" form="order">
              Confirmar pedido
            </button>
          </SubmitButton>
        </CartItemContainer>
      </CartListContainer>
    </CartContainer>
  );
}
