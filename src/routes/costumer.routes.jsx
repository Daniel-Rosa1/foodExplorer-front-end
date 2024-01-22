import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { ShowDish } from '../pages/ShowDish';
import { NotFound } from '../pages/NotFound';


export function CostumerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/showdish/:id" element={< ShowDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}