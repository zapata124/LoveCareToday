import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { Featured, Organization, RenderSearched } from '../pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Featured />,
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
