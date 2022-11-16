import React from 'react';
import { auth } from '../../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import SideBar from './SideBar';

const Dashboard = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  if (loading) return <h1>Loading...</h1>;
  if (!user) route.push('/');
  // !! Here we display the tasks and this page should be dynamic [].js
  if(user)
  return (
    <>
      <div>Dashboard</div>
      <SideBar />
    </>
  );
};

export default Dashboard;
