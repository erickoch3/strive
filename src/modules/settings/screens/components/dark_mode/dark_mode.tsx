import React, {useContext} from 'react';
import {ListItem, Toggle, Icon} from '@core/components';
import {ModeContext} from '@core/contexts';

export const DarkModeToggle = (): JSX.Element => {
    const {mode, setMode} = useContext(ModeContext);
    const onChange = (): void => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    };
    return (
        <ListItem
            title='Dark Mode'
            description='Toggle between light and dark mode.'
            accessoryLeft={() => <Icon name='theme-light-dark' />}
            accessoryRight={() => <Toggle checked={mode === 'dark'} onChange={onChange} />} 
        />
    );
};