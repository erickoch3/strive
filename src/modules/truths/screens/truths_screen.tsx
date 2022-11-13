import React, {useContext} from 'react';
import {AppLayout, View, ScrollView, BaseCard} from '@core/components';
import {TruthNumberContext} from '@core/contexts';

export const TruthsScreen = (): JSX.Element => {

  const {truthNumber} = useContext(TruthNumberContext);

  const topPadding = 20;
  const cardPadding = 10;

  const truthList = [];

  for (let i = 1; i <= truthNumber; i++) {
    truthList.push(
    <View paddingTop={cardPadding} key={`truth${i}`}>
      <BaseCard cardType="Truth" cardNumber={i}/>
    </View>)
  }

  return (
    <AppLayout>
      <View paddingTop={topPadding}>
        <ScrollView>
          {truthList}
        </ScrollView>
      </View>
    </AppLayout>
  );
};
