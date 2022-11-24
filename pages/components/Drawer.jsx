import React, { useContext } from 'react';
import Link from 'next/link';
import StateContext from '../../context/StateContext';

const Drawer = ({ item: { title, id } }) => {
  const { DrawersArr } = useContext(StateContext);
  const getId = () => {
    console.log(id)
  }
  if (DrawersArr.length < 1) {
    return (
      <>
        <div>Your list is empty</div>
      </>
    );
  } else if (DrawersArr.length >= 1) {
    return (
      <>
        <div>
          <button onClick={getId}>{title}</button>
        </div>
      </>
    );
  }
};

export default Drawer;
