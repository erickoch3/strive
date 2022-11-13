import {useState, useMemo, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const useCardColorOne = (): {
    cardColorOne: string; setCardColorOne: (cardColorOne: string) => void,
} => {
    const [cardColorOne, setCardColorOne] = useState<string>("#6699ff");
    const storageKeyOne = 'cardColorOne';
    const saveCardColorOne = useCallback(async (newCardColorOne: string): Promise<void> => {
        try {
            setCardColorOne(newCardColorOne);
            await AsyncStorage.setItem(storageKeyOne, newCardColorOne);
        } catch (err) {
            console.error(err);
        }
    }, []);
    useEffect (() => {
        const loadCardColorOne = async (): Promise<void> => {
            try {
                const value = await AsyncStorage.getItem(storageKeyOne);
                if (value) {
                    setCardColorOne(value as string);
                }
            } catch (err) {
                console.error(err);
            }
        };
        loadCardColorOne();
    }, []);
    const cardColorState = useMemo(() => ({
        cardColorOne, 
        setCardColorOne: saveCardColorOne, 
    }), [cardColorOne, setCardColorOne]
    );
    return cardColorState;
};


export const useCardColorTwo = (): {
    cardColorTwo: string; setCardColorTwo: (cardColorTwo: string) => void
} => {
    const [cardColorTwo, setCardColorTwo] = useState<string>("#cc99ff");    
    const storageKeyTwo = 'cardColorTwo';
    const saveCardColorTwo = useCallback(async (newCardColorTwo: string): Promise<void> => {
        try {
            setCardColorTwo(newCardColorTwo);
            await AsyncStorage.setItem(storageKeyTwo, newCardColorTwo);
        } catch (err) {
            console.error(err);
        }
    }, []);
    useEffect (() => {
        const loadCardColorTwo = async (): Promise<void> => {
            try {
                const value = await AsyncStorage.getItem(storageKeyTwo);
                if (value) {
                    setCardColorTwo(value as string);
                }
            } catch (err) {
                console.error(err);
            }
        };
        loadCardColorTwo();
    }, []);

    const cardColorState = useMemo(() => ({
        cardColorTwo, 
        setCardColorTwo: saveCardColorTwo
    }), [cardColorTwo, setCardColorTwo]
    );
    return cardColorState;
};