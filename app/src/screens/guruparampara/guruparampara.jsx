import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Images from '../../../utils/Images/Images';

const guruparampara = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the ImageBackground after 5 sec
      navigation.navigate('dashboard');

    }, 3000);

    return () => clearTimeout(timer);
  }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate('dashboard');
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <View style={{flex: 1}}>
      {isVisible && ( // Conditionally render the view
        <ImageBackground
          style={{flex: 1}}
          source={Images.SHIKSHAPATRI}
          resizeMode="cover"
        />
      )}
    </View>
  );
};


export default guruparampara

const styles = StyleSheet.create({})