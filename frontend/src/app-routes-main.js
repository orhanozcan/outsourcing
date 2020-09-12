//import { withNavigationWatcher } from './contexts/navigation';


import About from './pages/About';

const routes = [

 
  {
    name: 'About',
    path: '/about',
    component: About
  }

];

export default routes.map(route => {
  return {
    ...route
   // ,component: withNavigationWatcher(route.component)
  };
});
