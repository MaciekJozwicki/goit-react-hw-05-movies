import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import { StrictMode } from 'react';

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: '/movies',
//       element: <Movies />,
//     },
//     {
//       path: '/movies/:movieId',
//       element: <MovieDetails />,
//       children: [
//         {
//           path: 'cast',
//           element: <Cast />,
//         },
//         {
//           path: 'reviews',
//           element: <Reviews />,
//         },
//       ],
//     },
//   ],
//   { basename: '/goit-react-hw-05-movies/' }
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename={'/goit-react-hw-05-movies'}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
