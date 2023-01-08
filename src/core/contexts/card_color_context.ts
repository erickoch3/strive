import {createContext} from 'react';

export const CardColorOneContext = createContext<{
  cardColorOne: string; setCardColorOne: (cardColorOne: string )
    => void
}>({
  cardColorOne: "#6699ff",  
  setCardColorOne: (_cardColorOne: string) => {},
});

export const CardColorTwoContext = createContext<{
    cardColorTwo: string; setCardColorTwo: (cardColorTwo: string) 
    => void
}>({
  cardColorTwo: "#cc99ff",
  setCardColorTwo: (_cardColorTwo: string) => {},
});