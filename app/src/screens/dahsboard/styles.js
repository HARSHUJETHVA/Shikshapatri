import {Platform, StyleSheet} from 'react-native';
import {hs, ms, vs} from '../../../utils/helper/Metrics';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  safeAreaView: {
    flexDirection: 'row',
    marginHorizontal: vs(14),

    marginTop: Platform.OS === 'android' ? vs(14) : vs(0),
    justifyContent: 'space-between',
  },
  shikshaptriText: {
    textAlign: 'left',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: vs(10),
    // marginHorizontal: hs(10),
    fontSize: ms(24),
    fontWeight: '600',
    color: 'rgb(161,127,69)',
  },
  safeAreaViewMainView: {
    flex: 1,
    marginHorizontal: hs(24),
    marginVertical: vs(24),
    // borderWidth: 1,
  },
  Divider: {margin: vs(8)},
  flatList_View: {height: '88%'},
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: vs(8),
    right: hs(2),
  },
  touchableOpacity: {
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: hs(6),
    marginVertical: vs(6),
    borderRadius: ms(10),
    paddingVertical: vs(8),
    paddingHorizontal: hs(4),
    borderColor: 'rgb(161,127,69)',
  },
  menuTitle: {
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: ms(16),
    color: 'rgb(83, 61, 22)',
    width:"100%"
  },
  startEnd: {
    fontSize: ms(16), 
    alignSelf: 'center',
     fontWeight: '400',
     color: 'rgb(83, 61, 22)',
    },
});
