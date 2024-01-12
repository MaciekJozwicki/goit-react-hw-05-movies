import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { HashRouter, Route, Routes } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   HashRouter,
//   RouterProvider,
// } from 'react-router-dom';
import Movies from 'components/Movies/Movies';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import ErrorPage from 'error-page';

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
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} errorElement={ErrorPage} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  </HashRouter>

  // <React.StrictMode>
  //   <RouterProvider router={router}>
  //     <App />
  //   </RouterProvider>
  // </React.StrictMode>
);
