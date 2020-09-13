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
  } ,
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
  } 


];

export default routes.map(route => {
  return {
    ...route
   // ,component: withNavigationWatcher(route.component)
  };
});
