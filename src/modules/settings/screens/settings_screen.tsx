import React from 'react';
import {AppLayout} from '@core/components';
import {DarkModeToggle, TruthNumberInput, GoalNumberInput, CardColorOneInput, CardColorTwoInput} from './components';

export const SettingsScreen = (): JSX.Element => {
  return (
    <AppLayout>
      <DarkModeToggle />
      <TruthNumberInput />
      <GoalNumberInput />
      <CardColorOneInput />
      <CardColorTwoInput />
    </AppLayout>
  );
};
