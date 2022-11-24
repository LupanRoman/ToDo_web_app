import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth } from '../../utils/firebase';
import SideBar from './SideBar';
import TopBar from './TopBar';
import DrawerDetails from './[id]';

const Dashboard = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>Loading...</h1>;
  // !! Turn back on the log in functionality
  // if (!user) route.push('/');
  // !! Here we display the tasks and this page should be dynamic [].js
  // if(user)
  return (
    <>
      <div className="layout">
        <SideBar />
        <TopBar />
        <DrawerDetails />
      </div>
    </>
  );
};

export default Dashboard;
