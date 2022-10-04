import React, {useState} from 'react'
export const useObj = (initialState) => {
     const [state, setState] = useState(initialState);

     const setNewState = (newState) => {
          setState(curr => ({...curr, ...newState}));
     }

     return [state, setNewState];
}