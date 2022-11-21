import React, { useState } from 'react';
import { GiExitDoor } from 'react-icons/gi';
import { auth } from '../../utils/firebase';
import AddDrawer from './AddDrawer';

const SideBar = () => {
  // const changeTheme = () => {
  //   var theme = document.getElementById('theme');
  //   if (theme.checked == true) {
  //     console.log('Hello');
  //   } else {
  //     console.log('not checked');
  //   }
  // };

  const [drawerModal, setDrawerModal] = useState(false);

  return (
    <>
      <div className=" sidebar hidden md:flex flex-col bg-bg-color row-start-1 row-end-7">
        <h4 className="h-20 flex items-center p-10 text-xl font-bold">To Do</h4>
        <div className="flex h-full flex-col justify-between">
          <ul className="pl-10 pt-5 flex flex-col gap-2">
            <li className="h-7 w-32 bg-btn-add rounded-lg indent-1.5 cursor-pointer">
              1
            </li>
            <li className="h-7 w-32 bg-btn-add rounded-lg indent-1.5 cursor-pointer">
              2
            </li>
            <li className="h-7 w-32 bg-btn-add rounded-lg indent-1.5 cursor-pointer">
              3
            </li>
          </ul>
          <div className="flex flex-col gap-4 items-center">
            <button
              onClick={() => setDrawerModal(true)}
              className="h-7 w-32 bg-btn-add rounded-lg cursor-pointer text-sm"
            >
              Add drawer
            </button>
            <input
              // onClick={changeTheme}
              id="theme"
              type="checkbox"
              className="input"
            />
            <button className="text-xl h-7 w-10 bg-btn-add flex items-center justify-center rounded-lg mb-5 cursor-pointer">
              <GiExitDoor />
            </button>
            {drawerModal && <AddDrawer closeDrawer={setDrawerModal} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
