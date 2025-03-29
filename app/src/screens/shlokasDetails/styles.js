import {Platform, StyleSheet} from 'react-native';
import {hs, ms, vs} from '../../../utils/helper/Metrics';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  mainView: {
    flexDirection: 'row',
    // borderWidth: 1,
    // alignSelf:"center",
    marginHorizontal: vs(14),
    marginTop: Platform.OS === 'android' ? vs(14) : vs(0),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shikshaptriText: {
    textAlign: 'left',
    alignItems: 'center',
    alignSelf: 'flex-start',
    fontSize: ms(18),
    fontWeight: '600',
    color: 'rgb(161,127,69)',
    marginHorizontal: hs(8),
    // borderWidth:1,
    width: '70%',
  },
  SafeAreaView: {
    flex: 1,
    marginHorizontal: hs(24),
    marginVertical: vs(24),
    // borderWidth: 1,
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backImage: {
    width: hs(20),
    height: vs(20),
    alignSelf: 'center',
  },
  plusMinusView: {
    flexDirection: 'row',
    // borderWidth: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    right:hs(8)
  },
  TouchableOpacityPlusMinus: {
    padding: vs(8),
  },
  Divider: {
    margin: vs(8),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: ms(30),
  },
  animatedView: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  currentShlokaText: {
    textAlign: 'center',
    // fontSize,
    marginVertical: vs(10),
    color: 'rgb(83, 61, 22)',
  },
  deviderall: {
    width: hs(150),
    height: vs(20),
  },
  devideLast: {
    width: hs(200),
    height: vs(30),
  },
  animatedViewPreviusNext: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: vs(30),
    paddingHorizontal: hs(24),
    alignItems: 'center',
  },
  previusNextTouchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    width: hs(24),
    height: vs(24),
    alignSelf: 'center',
    marginRight: hs(4),
  },
  rightIcon: {
    width: hs(24),
    height: vs(24),
    alignSelf: 'center',
    marginLeft: hs(4),
  },
});
