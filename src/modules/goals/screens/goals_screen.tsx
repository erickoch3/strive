import React, {useContext} from 'react';
import {AppLayout, View, ScrollView} from '@core/components';
import {BaseCard} from '@core/components';
import {GoalNumberContext} from '@core/contexts';

const topPadding = 20;
const cardPadding = 10;

export const GoalsScreen = (): JSX.Element => {

  const {goalNumber} = useContext(GoalNumberContext);
  
  const goalsList = [];

  for (let i = 1; i <= goalNumber; i++) {
    goalsList.push(
    <View paddingTop={cardPadding} key={`goal${i}`}>
      <BaseCard cardType="Goal" cardNumber={i}/>
    </View>)
  }

  return (
    <AppLayout>
      <View paddingTop={topPadding}>
        <ScrollView>
          {goalsList}
        </ScrollView>
      </View>
    </AppLayout>
  );
};
