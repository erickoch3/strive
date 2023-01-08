import {createContext} from 'react';

export const TruthNumberContext = createContext<{truthNumber: number; setTruthNumber: (truthNumber: number) => void}>({
  truthNumber: 3,  
  setTruthNumber: (_truthNumber: number) => {},
});
