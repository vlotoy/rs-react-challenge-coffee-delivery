import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import { IntroContainer, IntroContent, Item, ItemsContainer } from './styles';

import introCoffee from '../../../assets/introCoffee.svg';
import introBackground from '../../../assets/introBackground.svg';

export function Intro() {
  const theme = useTheme();
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ItemsContainer>
            <Item>
              <ShoppingCart
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.colors['yellow-dark'] }}
              />
              Compra simples e segura
            </Item>
            <Item>
              <Package
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.colors['base-text'] }}
              />
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <Timer
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.colors['yellow'] }}
              />
              Entrega rápida e rastreada
            </Item>
            <Item>
              <Coffee
                size={32}
                weight="fill"
                style={{ backgroundColor: theme.colors['purple'] }}
              />
              O café chega fresquinho até você
            </Item>
          </ItemsContainer>
        </div>
        <img src={introCoffee} alt="Café do Coffee Delivery" />
      </IntroContent>
      <img src={introBackground} id="intro-bg" alt="" />
    </IntroContainer>
  );
}
