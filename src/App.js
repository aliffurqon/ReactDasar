import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import StylingComponent from './pages/StylingComponent';

const App = () => {
  return (
  <View>
    <ScrollView>
      <SampleComponent />
      <StylingComponent />
      <FlexBox />
      <Position />
    </ScrollView>
  </View>
  )
}

export default App;