import {useState, useMemo, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGoalNumber = (): {goalNumber: number; setGoalNumber: (goalNumber: number) => void} => {
    const [goalNumber, setGoalNumber] = useState<number>(3);
    const storageKey = 'goalNumber';
    const saveGoalNumber = useCallback(async (newGoalNumber: number): Promise<void> => {
        try {
            setGoalNumber(newGoalNumber);
            await AsyncStorage.setItem(storageKey, newGoalNumber.toString());
        } catch (err) {
            console.error(err);
        }
    }, []);
    useEffect (() => {
        const loadGoalNumber = async (): Promise<void> => {
            try {
                const value = await AsyncStorage.getItem(storageKey);
                if (value) {
                    setGoalNumber(parseInt(value) as number);
                }
            } catch (err) {
                console.error(err);
            }
        };
        loadGoalNumber();
    }, []);
    const goalNumberState = useMemo(() => ({goalNumber, setGoalNumber: saveGoalNumber}), [goalNumber, saveGoalNumber]);
    return goalNumberState;
};
