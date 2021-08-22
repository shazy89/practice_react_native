import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, View, Text} from 'react-native';
const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text>DEtails PAge</Text>

      <Button
        title="Go Back to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
