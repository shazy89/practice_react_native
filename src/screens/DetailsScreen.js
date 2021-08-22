import React from 'react';
import {Button, View, Text} from 'react-native';
const DetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text>DEtails PAge</Text>
      <Button
        title="Go Back to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;
