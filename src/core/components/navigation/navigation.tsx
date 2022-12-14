import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@ui-kitten/components';
import {NavItem} from '@core/interfaces';
import {Icon} from '../icon/icon';

interface Props {
  navItems: NavItem[];
}

const Tab = createBottomTabNavigator();

export const Navigation = (props: Props): JSX.Element => {
  const {navItems} = props;
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navItems[0].name}>
        {navItems.map((navItem) => (
          <Tab.Screen
            options={{
              title: navItem.title,
              headerStyle: {
                backgroundColor: theme["background-basic-color-1"],
                shadowColor: theme["background-basic-color-3"],
              },
              headerTitleStyle: {
                color: theme["text-basic-color"],
              },             
              tabBarActiveTintColor: theme["color-primary-default"],
              tabBarActiveBackgroundColor: theme["background-basic-color-1"],
              tabBarInactiveBackgroundColor: theme["background-basic-color-1"],
              tabBarStyle: {
                borderTopColor: theme["background-basic-color-2"],
              },
              tabBarIcon: (iconProps) => {
                const {focused, color, size} = iconProps;
                return <Icon name={focused ? navItem.iconFocused : navItem.icon} size={size} color={color} />;
              },
            }}
            key={navItem.name}
            name={navItem.name}
            component={navItem.component}
            
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
