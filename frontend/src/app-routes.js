// import { withNavigationWatcher } from './contexts/navigation';
import home from './pages/Home'
import about from './pages/About'
import activate from './pages/Activate'
import { RegisterForm, LoginForm } from './components'

const routes = [

  {
    menuposition: 'left',
    name: 'Home',
    path: '/home',
    iconname:'bars',
    component: home
  },
  {
    menuposition: 'left',
    name: 'About',
    path: '/about', 
    component: about
  },
  {
    menuposition: 'right',
    name: 'Login',
    path: '/login',
    iconname:'sign-in',
    component: LoginForm
  }
  ,
  {
    menuposition: 'right',
    name: 'Register',
    path: '/register',
    iconname:'signup',
    component: RegisterForm
  }
  ,
  {
    menuposition: 'none',
    name: 'Activate',
    path: '/activate',
    iconname:'none',
    component: activate
  }

];

export default routes.map(route => {
  return {
    ...route
   // ,component: withNavigationWatcher(route.component)
  };
});
