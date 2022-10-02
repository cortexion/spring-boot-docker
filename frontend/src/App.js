import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AllMovies from './components/AllMovies'
import AddNew from './components/AddNew'
import ClientDetails from './components/ClientDetails'
import ClientEdit from './ClientEdit'
import { HomeLayout } from './components/HomeLayout';

const App = () => {

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<AllMovies />} />
        <Route path="/client" element={<AddNew />} />
        <Route path="/client/:id" element={<ClientDetails />} />
        <Route path='/clients/:id' element={<ClientEdit />} />
      </Route>
    </Routes>)
};

export default App;