import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  const DrawersArr = [];
  
  
  

  const getData = () => {
    const titleInput = document.getElementById('drawer');
    DrawersArr.push({
      title: titleInput.value,
      slug: Math.random(1, 100),
      content: [
        {
          title: 'To Do',
          ToDo: [
            {
              title: 'Title of the task',
            },
          ],
        },
        {
          title: 'Done',
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
