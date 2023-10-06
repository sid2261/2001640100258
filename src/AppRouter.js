import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainList from './TrainList';
import TrainDetails from './TrainDetails';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrainList/>} />
        <Route path="/train/:trainNumber" element={<TrainDetails/>} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
