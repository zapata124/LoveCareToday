import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import Organization from '../pages/Organization';
import MainCard from '../components/MainCard';
import RenderSearched from '../pages/RenderSearched';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainCard />,
      },
      {
        path: '/search/:id',
        element: <RenderSearched />,
      },
      {
        path: '/:id',
        element: <Organization />,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
