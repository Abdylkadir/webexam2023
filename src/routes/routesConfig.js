import RoomsPage from '@containers/RoomsPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';


const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    },
    {
        path: '/rooms',
        exact: true,
        element: <RoomsPage />
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage />
    }
]

export default routesConfig

