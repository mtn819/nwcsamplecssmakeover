import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sample from './pages/sample/Sample';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
