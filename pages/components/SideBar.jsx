import React from 'react';
import { auth } from '../../utils/firebase';

const SideBar = () => {
  return (
    <>
      <div className=" sidebar hidden md:flex flex-col justify-between bg-bg-color row-start-1 row-end-7">
        <h4>To Do</h4>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <button>Add drawer</button>
        </div>
        <div>
          <p>Theme switch</p>
        </div>
      </div>
      {/* <button onClick={() => auth.signOut()}>Sign out</button> */}
    </>
  );
};

export default SideBar;
