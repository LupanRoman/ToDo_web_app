import React from 'react';
import { auth } from '../../utils/firebase';


const SideBar = () => {
  return (
    <>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </>
  );
};

export default SideBar;
