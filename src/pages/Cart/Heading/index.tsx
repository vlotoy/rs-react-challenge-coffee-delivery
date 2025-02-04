import { CurrencyDollarSimple, MapPin } from '@phosphor-icons/react';
import { HeadingContainer } from './styles';
import { useTheme } from 'styled-components';

interface HeadingProps {
  isAddress: boolean;
  title: string;
  description: string;
}

export function Heading({ isAddress, title, description }: HeadingProps) {
  const theme = useTheme();
  return (
    <HeadingContainer>
      {isAddress ? (
        <MapPin size={22} color={theme.colors['yellow-dark']} />
      ) : (
        <CurrencyDollarSimple size={22} color={theme.colors['purple-dark']} />
      )}
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </HeadingContainer>
  );
}
