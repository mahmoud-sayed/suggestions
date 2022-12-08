import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import SubmitSuggestion from '../../Pages/SubmitSuggestion/SubmitSuggestion';
import ReportPage from './../../Pages/ReportPage/ReportPage';
import EvaluationSuggestion from './../../Pages/EvaluationSuggestion/EvaluationSuggestion';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reportpage' element={<ReportPage />} />
      <Route path='/submitsuggestion' element={<SubmitSuggestion />} />
      <Route path='/evaluationsuggestion' element={<EvaluationSuggestion />} />
    </Routes>
  );
};

export default AppRoutes;