import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, View, Text, StatusBar} from 'react-native';
const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'purple',
      }}>
      {
        <StatusBar
          barStyle="light-content"
          animated={true}
          backgroundColor="red"
        />
      }
      <Text>DEtails PAge</Text>

      <Button
        title="Go Back to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
