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
import {shlokas} from '../../../utils/shlokas/shlokas';

const ShlokasDetails = ({navigation, route}) => {
  const [fontSize, setFontSize] = useState(16);
  const MAX_FONT_SIZE = ms(32);
  const MIN_FONT_SIZE = ms(10);

  const shloka = route.params.shloka;
  console.log('shloka ========>>>>>>>', shloka);

  // const {shlokas, index} = route.params;
  const [currentIndex, setCurrentIndex] = useState(shloka?.id);
  // console.log('Current Index:', currentIndex);
  // console.log('Shlokas:', shlokas);

  // const currentShloka = shlokas[currentIndex];
  // console.log('currentShloka ======>>>>>', currentShloka);

  // const selectedShloka = currentShloka.data.find(
  //   shloka => shloka.id === shloka.id,
  // );
  // console.log('selectedShloka ======>>>>>', selectedShloka);

  const handleNext = () => {
    if (currentIndex < 0) {
      setCurrentIndex(currentIndex + 1);
    }
  };

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
      style={{flex: 1}}
      source={Images.BACKGROUND}
      resizeMode="cover">
      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: hs(24),
          marginVertical: vs(24),
          // borderWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // borderWidth: 1,
            // alignSelf:"center",

            marginTop: Platform.OS === 'android' ? vs(14) : vs(0),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{padding: vs(8)}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={Images.BACK}
              resizeMode="contain"
              style={{
                width: hs(20),
                height: vs(20),
                alignSelf: 'center',
                marginHorizontal: Platform.OS === 'android' ? hs(0) : hs(10),
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{padding: vs(8)}}
              onPress={increaseFontSize}>
              <Image
                source={Images.PLUS}
                resizeMode="contain"
                style={{width: hs(20), height: vs(20)}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: vs(8)}}
              onPress={decreaseFontSize}>
              <Image
                source={Images.MINUS}
                resizeMode="contain"
                style={{width: hs(20), height: vs(20)}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Divider width={1} color="rgb(161,127,69)" style={{margin: vs(8)}} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: ms(30)}}>
          <Animatable.View
            animation="zoomInUp"
            style={{
              width: '90%',
              height: '90%',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize,
                marginVertical: vs(10),
                color: 'black',
              }}>
              {/* {shlokasTrasnlation.shloka?.gujarati} */}
              {/* {currentShloka.gujarati} */}
              {shloka?.sanskrit}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize,
                marginVertical: vs(10),
                color: 'black',
              }}>
              {/* {shlokasTrasnlation.shloka?.sanskrit} */}
              {/* {currentShloka.sanskrit} */}
              {shloka?.gujarati}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize,
                marginVertical: vs(10),
                color: 'black',
              }}>
              {/* {shlokasTrasnlation.shloka?.translation} */}
              {shloka?.translation}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize,
                marginVertical: vs(10),
                color: 'black',
              }}>
              {/* {shlokasTrasnlation.shloka?.transliteration} */}
              {shloka?.transliteration}
            </Text>
          </Animatable.View>
        </ScrollView>

        <Animatable.View
          animation="zoomInUp"
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 30,
            paddingHorizontal: 24,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentIndex === 0}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            {currentIndex != 0 && (
              <Image
                source={Images.LEFT}
                resizeMode="contain"
                style={{
                  width: hs(24),
                  height: vs(24),
                  alignSelf: 'center',
                  marginRight: hs(4),
                }}
              />
            )}

            <Text
              style={{
                fontSize: ms(16),
                color: currentIndex === 0 ? 'gray' : 'black',
              }}>
              {'Previous'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
            disabled={currentIndex === shlokas.length - 1}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: ms(16),
                color: currentIndex === shlokas.length - 1 ? 'gray' : 'black',
              }}>
              {'Next'}
            </Text>
            {currentIndex !== shlokas.length - 1 && (
              <Image
                source={Images.RIGHT}
                resizeMode="contain"
                style={{
                  width: hs(24),
                  height: vs(24),
                  alignSelf: 'center',
                  marginLeft: hs(4),
                }}
              />
            )}
          </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ShlokasDetails;

const styles = StyleSheet.create({});
