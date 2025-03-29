import {
  FlatList,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../utils/Images/Images';
import {styles} from './styles';
import {hs, ms, vs} from '../../../utils/helper/Metrics';
import {Divider} from '@rneui/themed';
import {
  shikshapatriShlokas,
  shikshaptriDhyan,
} from '../../../utils/shlokas/shlokas';
import * as Animatable from 'react-native-animatable';
import {Image} from 'react-native';
import MarqueeText from 'react-native-marquee';

const ShlokasList = ({navigation, route}) => {
  const shlokas_list = route?.params?.shlokas_list;
  const shlokas_data =
    shlokas_list?.menuId === 1 ? shikshaptriDhyan : shikshapatriShlokas;

  // Get the start and end id from the selected shlokas list
  const {start, end} = shlokas_list || {};

  // Filter shlokas data based on the start and end id
  const filteredShlokas = shlokas_data.filter(
    item => item.id >= start && item.id <= end,
  );
  const [fontSize, setFontSize] = useState(16);
  const MAX_FONT_SIZE = ms(24);
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
                style={[styles.backImage]}
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
        <Divider width={1} color="rgb(161,127,69)" style={{margin: vs(8)}} />
        {/* <View
          style={{
            height: '88%',
            flex: 1,
            borderWidth: 1,
            width: '95%',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <FlatList
            contentContainerStyle={{flexGrow: 1, paddingBottom: vs(8)}}
            showsVerticalScrollIndicator={false}
            data={
              shlokas_list?.menuId === 1
                ? shikshaptriDhyan
                : shikshapatriShlokas
            }
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Animatable.View
                animation="zoomInUp"
                style={{
                  // borderWidth: 0.2,
                  marginHorizontal: hs(4),
                  padding: vs(2),
                  marginVertical: vs(2),
                  // borderRadius: vs(10),
                  width: '95%',
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center',alignSelf:"center"}}
                  onPress={() =>
                    navigation.navigate('shlokasDetails', {
                      shloka: item,
                      // shikshaptriDhyan,
                      shlokas_data:
                        shlokas_list?.menuId === 1
                          ? shikshaptriDhyan
                          : shikshapatriShlokas,

                      // index: shlokas_list.indexOf(item),
                      index: (shlokas_list?.menuId === 1
                        ? shikshaptriDhyan
                        : shikshapatriShlokas
                      ).findIndex(i => i.id === item.id),
                      shlokas_list: shlokas_list,
                    })
                  }>
                  <Text
                    // numberOfLines={1}
                    style={{
                      color: 'rgb(83, 61, 22)',
                      fontSize,
                      // paddingHorizontal: 8,
                      paddingVertical: 4,
                      // borderWidth: 0.2,
                      // borderRadius: 40,
                      alignSelf: 'flex-start',
                    }}>
                    {item.id}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: 'rgb(83, 61, 22)',
                      fontSize,
                      borderWidth: 0.2,
                      borderRadius: 8,
                      alignSelf: 'flex-start',
                      width: '100%',
                      left: 4,
                      padding: 4,
                    }}
                  >
                    {item.gujarati}
                  </Text>
                </TouchableOpacity>
              </Animatable.View>
            )}
          />
        </View> */}

        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            data={
              // shlokas_list?.menuId === 1
              //   ? shikshaptriDhyan
              //   : shikshapatriShlokass
              filteredShlokas
            }
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Animatable.View animation="zoomInUp" style={styles.listItem}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    navigation.navigate('shlokasDetails', {
                      shloka: item,
                      shlokas_data:
                        shlokas_list?.menuId === 1
                          ? shikshaptriDhyan
                          : shikshapatriShlokas,
                      index: (shlokas_list?.menuId === 1
                        ? shikshaptriDhyan
                        : shikshapatriShlokas
                      ).findIndex(i => i.id === item.id),
                      shlokas_list: shlokas_list,
                    })
                  }>
                  <Text numberOfLines={1} style={[styles.idText, {fontSize}]}>
                    {item.id}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.shlokaText, {fontSize}]}>
                    {item?.gujSanskrit}
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

export default ShlokasList;
