import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {homeStyles} from './HomeScreenStyling';
import {
  Button,
  View,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from 'react-native';
const HomeScren = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      }}>
      {<StatusBar barStyle="dark-content" backgroundColor="red" />}
      <Text style={homeStyles.fontSize3}>Home Screen</Text>
      <ScrollView>
        {[1, 2, 3, 4, 5, 6].map(num => (
          <Text key={num} style={homeStyles.marginBottom}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        ))}
      </ScrollView>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

export default HomeScren;
