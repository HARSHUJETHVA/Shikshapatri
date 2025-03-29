import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Images from '../../../utils/Images/Images';
import {Divider} from '@rneui/themed';
import {shlokas} from '../../../utils/shlokas/shlokas';
import * as Animatable from 'react-native-animatable';
import {useFocusEffect} from '@react-navigation/native';
import {styles} from './styles';
import {hs, ms, vs} from '../../../utils/helper/Metrics';
import {shlokas_title} from '../../../utils/shlokas/shlokas_title';
import MarqueeText from 'react-native-marquee';

const Dashboard = ({navigation}) => {
  const [selectionModeEnable, changeSelectionMode] = useState(true);

  const [fontSize, setFontSize] = useState(16);
  const MAX_FONT_SIZE = ms(32);
  const MIN_FONT_SIZE = ms(10);

  const increaseFontSize = () => {
    setFontSize(prevSize =>
      prevSize < MAX_FONT_SIZE ? prevSize + 2 : prevSize,
    );
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize =>
      prevSize > MIN_FONT_SIZE ? prevSize - 2 : prevSize,
    );
  };
  useFocusEffect(
    useCallback(() => {
      changeSelectionMode(true);
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [selectionModeEnable]),
  );

  const onBackPress = () => {
    if (selectionModeEnable) {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Exit', onPress: () => BackHandler.exitApp()},
        ],
        {cancelable: false},
      );
      changeSelectionMode(false);
      return true;
    } else {
      return false;
    }
  };
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={Images.BACKGROUND}
      resizeMode="cover">
      <SafeAreaView style={styles.safeAreaViewMainView}>
        <View style={styles.safeAreaView}>
          <Text style={styles.shikshaptriText}>{'શિક્ષાપત્રી'}</Text>
        </View>
        <Divider width={1} color="rgb(161,127,69)" style={styles.Divider} />

        <View style={styles.flatList_View}>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            data={shlokas_title}
            numColumns={2}
            keyExtractor={item => item.menuId.toString()}
            renderItem={({item}) => (
              <Animatable.View style={{flex: 1}} animation="zoomInUp">
                <TouchableOpacity
                  style={styles.touchableOpacity}
                  onPress={() => {
                    navigation.navigate('shlokasList', {shlokas_list: item}),
                      console.log('item =========>>>>>>>>>>', item);
                  }}>
                  <Text numberOfLines={1} style={styles.menuTitle}>
                    {item?.menuTitle}
                  </Text>
                  <Text style={styles.startEnd}>
                    {item?.start}-{item?.end}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            )}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Dashboard;
