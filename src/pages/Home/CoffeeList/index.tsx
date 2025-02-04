import { MouseEvent, useState } from 'react';
import coffees from '../../../coffees.json';
import { CoffeeItem } from './CoffeeItem';
import {
  CoffeeListContainer,
  CoffeeListHeader,
  Coffees,
  FilterContainer,
} from './styles';

const filterOptions = [
  'Tradicional',
  'Especial',
  'Com leite',
  'Alcoólico',
  'Gelado',
];

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
}

export function CoffeeList() {
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(coffees);

  function handleFilterCoffees(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;

    const filteredList: Coffee[] = coffees.filter((item) =>
      item.tags
        .map((tag) => tag.toLowerCase())
        .includes(target.innerText.toLowerCase())
    );
    setFilteredCoffees(filteredList);
  }

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>

        <FilterContainer>
          <button onClick={() => setFilteredCoffees(coffees)}>Todos</button>

          {filterOptions.map((option) => (
            <button key={option} onClick={handleFilterCoffees}>
              {option}
            </button>
          ))}
        </FilterContainer>
      </CoffeeListHeader>

      <Coffees>
        {filteredCoffees.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </Coffees>
    </CoffeeListContainer>
  );
}
