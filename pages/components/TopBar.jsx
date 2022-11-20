import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
// import StateContext from '../../context/StateContext';
// import { useContext } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const TopBar = () => {
  // const { item } = useContext(StateContext);
  var width = screen.width;
  if (width <= 800) {
    return (
      <>
        <div className='col-start-1 col-end-5 mt-9 '>
          <nav className="flex justify-between ">
            <div className="flex bg-nav-color w-72 h-10 items-center rounded-r-xl">
              <h5 className="font-bold ml-6 ">Name of the board</h5>
              <button className="text-2xl ml-9">
                <IoIosArrowDown />
              </button>
            </div>
          </nav>
        </div>
            <div>
              <button className="h-9 w-9 bg-btn-add flex items-center justify-center rounded-full mt-9 ml-4">
                <BsPlusLg />
              </button>
            </div>
      </>
    );
  } else if (width >= 800) {
    return (
      <>
        <div className="hidden md:flex row-start-1 row-end-1 bg-bg-color col-start-2 col-end-6">
          <div>
            <h4>Name of the board</h4>
          </div>
          <div>
            <button>Add Task</button>
          </div>
        </div>
      </>
    );
  }
};

export default TopBar;
