
import React from 'react';

import { Loader, Dimmer } from 'semantic-ui-react'
// import { NavigationProvider } from './contexts/navigation';
import { AuthProvider, useAuth } from './contexts/auth';
import Content from './Content';
import AuthenticatedContent from './AuthenticatedContent';
import { ToastProvider } from './contexts/toast';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Dimmer active   >< Loader /></Dimmer>;
  }
  // console.log(user)
  // if (user) {
    return <AuthenticatedContent />;
  // }
  // return <Content />;
}

export default function () {
  return (
    // <Router>
    <ToastProvider>
      <AuthProvider>
        {/* <NavigationProvis>asdasd */}
        <App />
        {/* </NavigationProvider> */}
      </AuthProvider>
    </ToastProvider>
    // </Router>
  );
}
