import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from 'components/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const router = createBrowserRouter(
  [
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
      children: [
        {
          path: 'cast',
          element: <Cast />,
        },
        {
          path: 'reviews',
          element: <Reviews />,
        },
      ],
    },
  ],
  { basename: '' }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
