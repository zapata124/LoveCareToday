import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { Featured, Organization, RenderSearched } from '../pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/featured',
        element: <Featured />,
      },
      {
        path: '/search/:id',
        element: <RenderSearched />,
      },
      {
        path: '/cause/:id',
        element: <Organization />,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
