import coffees from '../../../coffees.json';
import {
  CoffeeListContainer,
  CoffeeListHeader,
  Coffees,
  FilterContainer,
} from './styles';
import { Coffee } from './Coffee';

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>
        <FilterContainer>
          <button type="button">TRADICIONAL</button>
          <button type="button">ESPECIAL</button>
          <button type="button">COM LEITE</button>
          <button type="button">GELADO</button>
        </FilterContainer>
      </CoffeeListHeader>

      <Coffees>
        {coffees.map((coffee) => (
          <Coffee coffee={coffee} />
        ))}
      </Coffees>
    </CoffeeListContainer>
  );
}
