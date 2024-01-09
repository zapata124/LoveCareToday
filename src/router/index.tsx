import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import App from '../App';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/:id',
        element: <App />,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
