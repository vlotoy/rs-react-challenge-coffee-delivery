import { CurrencyDollarSimple, MapPin, Timer } from '@phosphor-icons/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import delivery from '../../assets/delivery.svg';
import { useCart } from '../../hooks/useCart';
import { Container, Content, Details, Heading, Info } from './styles';

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const orderInfo = orders.find((order) => order.id === Number(orderId));

  if (!orderInfo) {
    navigate('/');
    return null;
  }

  const { street, number, neighborhood, city, state, paymentMethod } =
    orderInfo;

  const paymentOptions = {
    cash: 'Dinheiro',
    debit: 'Cartão de Débito',
    credit: 'Cartão de Crédito',
  };

  return (
    <Container>
      <Heading>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Heading>
      <Content>
        <Info>
          <div>
            <MapPin
              size={32}
              weight="fill"
              color={theme.colors['white']}
              style={{ background: theme.colors['purple'] }}
            />
            <Details>
              <span>
                Entrega em <strong>{street}</strong>, {number}
              </span>
              <span>
                {neighborhood} - {city}, {state}
              </span>
            </Details>
          </div>
          <div>
            <Timer
              size={32}
              weight="fill"
              color={theme.colors['white']}
              style={{ background: theme.colors['yellow'] }}
            />
            <Details>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </Details>
          </div>
          <div>
            <CurrencyDollarSimple
              size={32}
              color={theme.colors['white']}
              style={{ background: theme.colors['yellow-dark'] }}
            />
            <Details>
              <span>Pagamento na entrega</span>
              <strong>{paymentOptions[paymentMethod]}</strong>
            </Details>
          </div>
        </Info>
        <img src={delivery} alt="" />
      </Content>
    </Container>
  );
}
