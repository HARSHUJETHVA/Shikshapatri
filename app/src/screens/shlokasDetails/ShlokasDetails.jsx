import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hs, ms, vs} from '../../../utils/helper/Metrics';
import * as Animatable from 'react-native-animatable';
import Images from '../../../utils/Images/Images';
import {Divider} from '@rneui/themed';
import {styles} from './styles';
import MarqueeText from 'react-native-marquee';
import { shlokas_title } from '../../../utils/shlokas/shlokas_title';

const ShlokasDetails = ({navigation, route}) => {
  const shloka = route.params.shloka;
  const [fontSize, setFontSize] = useState(16);
  const MAX_FONT_SIZE = ms(32);
  const MIN_FONT_SIZE = ms(10);

  const {index, shlokas_list, shlokas_data} = route.params;
  console.log('index ======>>>>>>', index);
  console.log('shloka ====>>>>', shloka);
  console.log('shlokas_list ====>>>>', shlokas_list);
  console.log('shlokas_data ===>>>>', shlokas_data);

  const [currentIndex, setCurrentIndex] = useState(index);
  const currentShloka = shlokas_data[currentIndex];
  const displayIndex = currentIndex + 1;

  const handleNext = () => {
    if (currentIndex < shlokas_data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // const handleNext = () => {
  //   const currentShlokaTitle = shlokas_title.find(
  //     title => currentIndex >= title.start && currentIndex <= title.end,
  //   );
  //   if (currentShlokaTitle && currentIndex < currentShlokaTitle.end) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
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

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={Images.BACKGROUND}
      resizeMode="cover">
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.mainView}>
          <View style={styles.backView}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={Images.BACK}
                resizeMode="contain"
                tintColor={'rgb(83, 61, 22)'}
                style={styles.backImage}
              />
            </TouchableOpacity>

            <MarqueeText
              style={styles.shikshaptriText}
              speed={0.4}
              marqueeOnStart={true}
              loop={true}
              delay={1000}>
              {displayIndex}
              {'. '}
              {shlokas_list?.menuTitle}
            </MarqueeText>
          </View>
          <View style={styles.plusMinusView}>
            <TouchableOpacity
              style={styles.TouchableOpacityPlusMinus}
              onPress={increaseFontSize}>
              <Image
                source={Images.PLUS}
                resizeMode="contain"
                tintColor={'rgb(83, 61, 22)'}
                style={styles.backImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityPlusMinus}
              onPress={decreaseFontSize}>
              <Image
                source={Images.MINUS}
                resizeMode="contain"
                tintColor={'rgb(83, 61, 22)'}
                style={styles.backImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Divider width={1} color="rgb(161,127,69)" style={styles.Divider} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          <Animatable.View animation="zoomInUp" style={styles.animatedView}>
            <Text style={[styles.currentShlokaText, {fontSize}]}>
              {currentShloka?.sanskrit}
            </Text>

            <Image
              source={Images.DIVIDERLIGHT}
              resizeMode="contain"
              style={styles.deviderall}
            />
            <Text style={[styles.currentShlokaText, {fontSize}]}>
              {currentShloka?.gujarati}
            </Text>
            <Image
              source={Images.D_CENTER}
              resizeMode="contain"
              style={styles.deviderall}
            />
            <Text style={[styles.currentShlokaText, {fontSize}]}>
              {currentShloka?.gujSanskrit}
            </Text>
            <Image
              source={Images.DIVIDERLIGHT}
              resizeMode="contain"
              style={styles.deviderall}
            />
            <Text style={[styles.currentShlokaText, {fontSize}]}>
              {currentShloka?.engSanskrit}
            </Text>
            <Image
              source={Images.D_LAST}
              resizeMode="contain"
              style={styles.devideLast}
            />
          </Animatable.View>
        </ScrollView>

        <Animatable.View
          animation="zoomInUp"
          style={styles.animatedViewPreviusNext}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentIndex === 0}
            style={styles.previusNextTouchableOpacity}>
            {currentIndex != 0 && (
              <Image
                source={Images.LEFT}
                tintColor={'rgb(83, 61, 22)'}
                resizeMode="contain"
                style={styles.leftIcon}
              />
            )}

            <Text
              style={{
                fontSize: ms(16),
                color:
                  currentIndex === 0 ? 'rgb(175, 153, 114)' : 'rgb(83, 61, 22)',
              }}>
              {'Previous'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
            disabled={currentIndex === shlokas_data.length - 1}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: ms(16),
                color:
                  currentIndex === shlokas_data.length - 1
                    ? 'rgb(175, 153, 114)'
                    : 'rgb(83, 61, 22)',
              }}>
              {'Next'}
            </Text>
            {currentIndex !== shlokas_data.length - 1 && (
              <Image
                source={Images.RIGHT}
                resizeMode="contain"
                tintColor={'rgb(83, 61, 22)'}
                style={styles.rightIcon}
              />
            )}
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ShlokasDetails;
