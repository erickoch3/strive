import React, {useContext} from 'react';
import {ListItem, Input, Icon} from '@core/components';
import {GoalNumberContext} from '@core/contexts';

export const GoalNumberInput = (): JSX.Element => {
    const {goalNumber, setGoalNumber} = useContext(GoalNumberContext);
    const onChange = (value: string): void => {
        setGoalNumber(parseInt(value));
    };
    return (
        <ListItem
            title='Goal Cards'
            description='Adjust number of goal cards.'
            accessoryLeft={() => <Icon name='alpha-g-circle-outline' />}
            accessoryRight={() => 
            <Input 
                placeholder={goalNumber.toString()}
                value={goalNumber}
                onChangeText={onChange} 
            />} 
        />
    );
};