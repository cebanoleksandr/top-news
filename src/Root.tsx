import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Article } from './pages/Article/Article';
import { Articles } from './pages/Articles/Articles';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Articles />} />
        <Route path=":id" element={<Article />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
