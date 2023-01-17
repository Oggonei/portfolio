import React from 'react'
import {useRoutes} from 'react-router-dom'
import DefaultLayout from './layout/default/DefaultLayout';
import CertificatesScreen from './screens/certificates/CertificatesScreen';
import HomeScreen from './screens/home/Home';
import LeisureScreen from './screens/leisure/LeisureScreen';
import ProfileScreen from './screens/profile/Profile';


function App() {

  const mainRoutes = {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '',
        element: <HomeScreen/>
      },
      {
        path: 'profile',
        element: <ProfileScreen/>,
      },
      {
        path: 'certificates',
        element: <CertificatesScreen/>,
      },
      {
        path: 'leisure',
        element: <LeisureScreen/>,
      },
    ]
  }

  const routing = useRoutes([mainRoutes])

  return (
    <>
      {routing}
    </>
  );
}

export default App;
