import Home from './mainRoute';
import Dashboard from './Dashboard';
import { Home as homeComponents } from '../assets/styles';
import signupPage from './loginSignupPage/signup';
import pageRoute from './pageRoute'
const Routes = {
    Home, Dashboard, signupPage, pageRoute
}


export { Routes, homeComponents };