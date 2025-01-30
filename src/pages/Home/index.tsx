import { CoffeeList } from './CoffeeList';
import { Intro } from './Intro';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  );
}
