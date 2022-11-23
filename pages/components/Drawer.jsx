import React, { useContext } from 'react';
import StateContext from '../../context/StateContext';

const Drawer = () => {
  const { DrawersArr } = useContext(StateContext);
  return (
    <>
      {DrawersArr.length < 1 && (
        <div className="pl-10 pt-5 flex flex-col gap-2">
          <h5>Your List is empty</h5>
        </div>
      )}

      {DrawersArr.length >= 1 &&
        DrawersArr.map((item) => (
          <div key={item.slug} className="pl-10 pt-5 flex flex-col gap-2">
            <h5 className="h-7 w-32 bg-btn-add rounded-lg indent-1.5 cursor-pointer">
              {item.title}
            </h5>
          </div>
        ))}
    </>
  );
};

export default Drawer;
