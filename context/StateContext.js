import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  const DrawersArr = [];

  const getData = () => {
    const titleInput = document.getElementById('drawer').value;
    DrawersArr.push({
      title: titleInput,
      id: Math.random(1, 5),
      content: [
        {
          status: 'To Do',
          ToDo: [
            {
              title: 'Title of the task',
            },
          ],
        },
        {
          status: 'Done',
          Done: [
            {
              title: 'Task Done',
            },
          ],
        },
      ],
    });
    console.log(DrawersArr);
  };


  return (
    <StateContext.Provider value={{ getData, DrawersArr, }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
