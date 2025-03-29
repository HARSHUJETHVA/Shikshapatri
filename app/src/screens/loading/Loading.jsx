import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../../../utils/Images/Images';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
      navigation.navigate('guruparampara');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={Images.SHIKSHAPATRI}
        resizeMode="cover"
      />
    </View>
  );
};

export default Loading;
