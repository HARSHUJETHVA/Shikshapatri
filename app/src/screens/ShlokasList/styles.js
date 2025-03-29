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
    right: hs(8),
  },
  TouchableOpacityPlusMinus: {
    padding: vs(8),
  },
  container: {
    // flex: 1,
    // paddingHorizontal: '2.5%', // 5% gap between screen edges
    alignSelf: 'center',
    // borderWidth: 1,
    height: '88%',
    right: 4,
    paddingBottom: 10,
    width: '100%',
  },
  flatListContainer: {
    flexGrow: 1,
    paddingBottom: 8,
  },
  listItem: {
    marginHorizontal: '2%', // Spacing between items
    // marginVertical: 4,
    padding: 4,
    borderRadius: 10,
    // backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    // shadowRadius: 5,
    // shadowOffset: {width: 0, height: 2},
    // elevation: 3, // Shadow for Android
    width: '100%',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap', // Wraps text for smaller screens
  },
  idText: {
    color: 'rgb(83, 61, 22)',
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginRight: 8, // Spacing between ID and Shloka text
    // width:'%'
  },
  shlokaText: {
    color: 'rgb(83, 61, 22)',
    borderWidth: 0.2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    paddingVertical: 4,
    width: '83%',
    paddingHorizontal: 8,
  },
});
