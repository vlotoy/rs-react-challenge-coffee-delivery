import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
      </Route>
    </Routes>
  );
}
