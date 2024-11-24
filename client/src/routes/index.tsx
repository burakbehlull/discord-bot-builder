import { useRoutes } from 'react-router-dom';
import { Home } from '@pages';
import App from '../App'

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />,
        }
    ])
    return routes
}

export default Routes