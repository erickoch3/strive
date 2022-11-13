import React from 'react';
import {Navigation, ApplicationProvider, light, dark, mapping, RootLayout} from '@core/components';
import * as customTheme from '@assets/jsons/custom_theme.json';
import {NavItem} from '@core/interfaces';
import {useMode, useTruthNumber, useGoalNumber, useCardColorOne, useCardColorTwo} from '@core/hooks';
import {ModeContext, TruthNumberContext, GoalNumberContext, CardColorOneContext, CardColorTwoContext} from '@core/contexts';
import {GoalsScreen} from '@goals/screens';
import {TruthsScreen} from '@truths/screens';
import {SettingsScreen} from '@settings/screens';


const navItems: NavItem[] = [
  {
    name: 'truths',
    title: 'Truths',
    component: TruthsScreen,
    icon: 'cards-heart-outline',
    iconFocused: 'cards-heart',
  },
  {
    name: 'goals',
    title: 'Goals',
    component: GoalsScreen,
    icon: 'star-outline',
    iconFocused: 'star',
  },
  {
    name: 'settings',
    title: 'Settings',
    component: SettingsScreen,
    icon: 'account-outline',
    iconFocused: 'account',
  },
];

export const App = (): JSX.Element => {
  const mode = useMode();
  const truthNumber = useTruthNumber();
  const goalNumber = useGoalNumber();
  const cardColorOne = useCardColorOne();
  const cardColorTwo = useCardColorTwo();
  const theme = mode.mode === 'light' ? light : dark;
  return (
    <ModeContext.Provider value={mode}>
      <TruthNumberContext.Provider value={truthNumber}>
        <GoalNumberContext.Provider value={goalNumber}>
          <CardColorOneContext.Provider value={cardColorOne}>
            <CardColorTwoContext.Provider value={cardColorTwo}>
              <ApplicationProvider mapping={mapping} theme={{...theme, ...customTheme}}>
                  <RootLayout>
                    <Navigation navItems={navItems} />
                  </RootLayout>
              </ApplicationProvider>
            </CardColorTwoContext.Provider>
          </CardColorOneContext.Provider>
        </GoalNumberContext.Provider>
      </TruthNumberContext.Provider>
    </ModeContext.Provider>
  ); 
};
