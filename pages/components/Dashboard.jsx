import React from 'react';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import SideBar from './SideBar';
import TopBar from './TopBar';

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
      <div className='layout'>
        <SideBar />
        <TopBar />
      </div>
    </>
  );
};

export default Dashboard;
