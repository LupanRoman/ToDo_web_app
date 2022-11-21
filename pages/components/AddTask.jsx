import React from 'react';

const AddTask = ({ closeTask }) => {
  return (
    <>
      <div>
        <h4>Add new task</h4>
        <button onClick={() => closeTask(false)}>Close</button>
      </div>
    </>
  );
};

export default AddTask;
