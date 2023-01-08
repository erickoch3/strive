import React, {useContext} from 'react';
import {ListItem, Input, Icon} from '@core/components';
import {TruthNumberContext} from '@core/contexts';

export const TruthNumberInput = (): JSX.Element => {
    const {truthNumber, setTruthNumber} = useContext(TruthNumberContext);
    const onChange = (value: string): void => {
        setTruthNumber(parseInt(value));
    };
    return (
        <ListItem
            title='Truth Cards'
            description='Adjust number of truth cards.'
            accessoryLeft={() => <Icon name='alpha-t-circle-outline' />}
            accessoryRight={() => 
            <Input 
                placeholder={truthNumber.toString()}
                value={truthNumber}
                onChangeText={onChange} 
            />} 
        />
    );
};