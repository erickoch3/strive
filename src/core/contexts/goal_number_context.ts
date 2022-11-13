import {createContext} from 'react';

export const GoalNumberContext = createContext<{goalNumber: number; setGoalNumber: (goalNumber: number) => void}>({
  goalNumber: 3,  
  setGoalNumber: (_goalNumber: number) => {},
});