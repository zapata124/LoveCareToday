import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { Featured, Organization, RenderSearched } from '../pages';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

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
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
];

const Router = createBrowserRouter(routes);

export default Router;
