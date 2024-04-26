import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import Register from './views/register.jsx';
import DefaultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Users from './views/users.jsx';
const router = createBrowserRouter ([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/default',
        element:<DefaultLayout/>
    },
    {
        path:'/guest',
        element:<GuestLayout/>
    }, 
    {
        path:'/users',
        element:<Users/>
    }

]);

export default router;