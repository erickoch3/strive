import {useState, useMemo, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const useTruthNumber = (): {truthNumber: number; setTruthNumber: (truthNumber: number) => void} => {
    const [truthNumber, setTruthNumber] = useState<number>(3);
    const storageKey = 'truthNumber';
    const saveTruthNumber = useCallback(async (newTruthNumber: number): Promise<void> => {
        try {
            setTruthNumber(newTruthNumber);
            await AsyncStorage.setItem(storageKey, newTruthNumber.toString());
        } catch (err) {
            console.error(err);
        }
    }, []);
    useEffect (() => {
        const loadTruthNumber = async (): Promise<void> => {
            try {
                const value = await AsyncStorage.getItem(storageKey);
                if (value) {
                    setTruthNumber(parseInt(value) as number);
                }
            } catch (err) {
                console.error(err);
            }
        };
        loadTruthNumber();
    }, []);
    const truthNumberState = useMemo(() => ({truthNumber, setTruthNumber: saveTruthNumber}), [truthNumber, saveTruthNumber]);
    return truthNumberState;
};
