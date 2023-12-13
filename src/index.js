import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from 'components/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
  },
  {
    path: '/movies/:movieId/cast',
    element: <div>Hello world!</div>,
  },
  {
    path: '/movies/:movieId/reviews',
    element: <div>Hello world!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
