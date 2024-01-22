import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { ShowDish } from '../pages/ShowDish';

import { NotFound } from '../pages/NotFound';


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/newdish" element={< NewDish />} />
      <Route path="/editdish/:id" element={< EditDish />} />
      <Route path="/showdish/:id" element={< ShowDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}