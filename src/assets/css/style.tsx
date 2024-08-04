import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const styles = StyleSheet.create({
  // Screen View
  root: {
    flex: 1,
    backgroundColor: colors?.white,
  },
  root2: {
    flex: 1,
    backgroundColor: colors?.primary,
  },
  container_js: {
    flex: 1,
    justifyContent: 'center',
  },
  container_ai: {
    flex: 1,
    alignItems: 'center',
  },
  screenCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Opacity
  opacity1: {opacity: 1},
  opacityPt7: {opacity: 0.7},
  opacityPt1: {opacity: 0.1},

  // Allign Items
  alinItems_c: {
    alignItems: 'center',
  },
  alinItems_fs: {
    alignItems: 'flex-start',
  },
  alinItems_fe: {
    alignItems: 'flex-end',
  },

  // Justify Content
  justifyContent_c: {
    justifyContent: 'center',
  },
  justifyContent_fs: {
    justifyContent: 'flex-start',
  },
  justifyContent_fe: {
    justifyContent: 'flex-end',
  },
  justifyContent_sa: {
    justifyContent: 'space-around',
  },
  justifyContent_sb: {
    justifyContent: 'space-between',
  },
  justifyContent_se: {
    justifyContent: 'space-evenly',
  },

  // Allign Self
  alignSelf_c: {
    alignSelf: 'center',
  },
  alignSelf_fs: {
    alignSelf: 'flex-start',
  },
  alignSelf_fe: {
    alignSelf: 'flex-end',
  },
  alignSelf_bl: {
    alignSelf: 'baseline',
  },

  // Image Resize Mode
  rmCover: {
    resizeMode: 'cover',
  },
  rmContain: {
    resizeMode: 'contain',
  },

  // Text Align
  textAlign_c: {
    textAlign: 'center',
  },
  textAlign_l: {
    textAlign: 'left',
  },
  textAlign_r: {
    textAlign: 'right',
  },
  textDecore_ul: {
    textDecorationLine: 'underline',
  },

  // FLEX //

  flex1: {flex: 1},
  flexGrow1: {flexGrow: 1},

  ai_jc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexcol_ai_c_jc_c: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // FLEX ROW
  flexrow: {
    flexDirection: 'row',
  },
  flexwrap: {
    flexWrap: 'wrap',
  },
  flexrow_wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flexrow_no_wrap: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  // ROW-AlignItems
  flexrow_ai_c: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexrow_ai_fs: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  flexrow_ai_fe: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  // ROW-AlignSelf
  flexRow_fs: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  flexRow_fe: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },

  // ROW-JustifyContent
  flexrow_jc_c: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexrow_jc_sb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexrow_jc_fe: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexrow_jc_fs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexrow_jc_sa: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexrow_jc_se: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  // ROW-AlignItems-JustifyContent
  flexrow_ai_c_jc_fs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexrow_ai_c_jc_fe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flexrow_ai_c_jc_sb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexrow_ai_c_jc_sa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexrow_ai_c_jc_se: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexrow_ai_c_jc_c: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexrow_ai_fs_jc_sb: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  // Column
  flexcol_ai_c_jc_fs: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexcol_ai_c_jc_fe: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  // zIndex
  zIndexP1: {
    zIndex: 1,
  },
  zIndexZero: {
    zIndex: 0,
  },
  zIndexN1: {
    zIndex: -1,
  },

  // Positions
  positionAb: {
    position: 'absolute',
  },
  positionRel: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    top: 25,
    left: 15,
  },

  // FONTS //

  // Font Family  ===> VioletSans-Regular
  ffblack: {
    fontFamily: 'Poppins-Black',
  },
  ffb: {
    fontFamily: 'Poppins-Bold',
  },
  ffeb: {
    fontFamily: 'Poppins-ExtraBold',
  },
  ffel: {
    fontFamily: 'Poppins-ExtraLight',
  },
  ffl: {
    fontFamily: 'Poppins-Light',
  },
  ffm: {
    fontFamily: 'Poppins-Medium',
  },
  ffr: {
    fontFamily: 'Poppins-Regular',
  },
  ffsm: {
    fontFamily: 'Poppins-SemiBold',
  },
  fft: {
    fontFamily: 'Poppins-Thin',
  },

  // Font Weight
  fw100: {
    fontWeight: '100',
  },
  fw200: {
    fontWeight: '200',
  },
  fw300: {
    fontWeight: '300',
  },
  fw400: {
    fontWeight: '400',
  },
  fw500: {
    fontWeight: '500',
  },
  fw600: {
    fontWeight: '600',
  },
  fw700: {
    fontWeight: '700',
  },
  fw800: {
    fontWeight: '800',
  },
  fw900: {
    fontWeight: '900',
  },

  // Font Size
  fs55: {
    fontSize: 55,
  },
  fs50: {
    fontSize: 50,
  },
  fs45: {
    fontSize: 45,
  },
  fs40: {
    fontSize: 40,
  },
  fs35: {
    fontSize: 35,
  },
  fs32: {
    fontSize: 32,
  },
  fs30: {
    fontSize: 30,
  },
  fs25: {
    fontSize: 25,
  },
  fs24: {
    fontSize: 24,
  },
  fs22: {
    fontSize: 22,
  },
  fs20: {
    fontSize: 20,
  },
  fs18: {
    fontSize: 18,
  },
  fs16: {
    fontSize: 16,
  },
  fs15: {
    fontSize: 15,
  },
  fs14: {
    fontSize: 14,
  },
  fs13: {
    fontSize: 13,
  },
  fs12: {
    fontSize: 12,
  },
  fs11: {
    fontSize: 11,
  },
  fs10: {
    fontSize: 10,
  },
  fs8: {
    fontSize: 8,
  },
  fs5: {
    fontSize: 5,
  },

  // Border //

  // Border Radius
  br0: {
    borderRadius: 0,
  },
  br1: {
    borderRadius: 1,
  },
  br5: {
    borderRadius: 5,
  },
  br8: {
    borderRadius: 8,
  },
  br10: {
    borderRadius: 10,
  },
  br12: {
    borderRadius: 12,
  },
  br15: {
    borderRadius: 15,
  },
  br18: {
    borderRadius: 18,
  },
  br20: {
    borderRadius: 20,
  },
  br25: {
    borderRadius: 25,
  },
  br30: {
    borderRadius: 30,
  },
  br35: {
    borderRadius: 35,
  },
  br40: {
    borderRadius: 40,
  },
  br45: {
    borderRadius: 45,
  },
  br50: {
    borderRadius: 50,
  },
  br55: {
    borderRadius: 55,
  },
  br60: {
    borderRadius: 60,
  },
  br100: {
    borderRadius: 100,
  },
  br150: {
    borderRadius: 150,
  },

  // Bottom Radius
  brBottomRadius20: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  // Top Radius
  brTopRadius20: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  brTopRadius10: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  brTopRadius5: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  // Width
  w360: {width: 360},
  w272: {width: 272},
  w250: {width: 250},
  w225: {width: 225},
  w200: {width: 200},
  w175: {width: 175},
  w150: {width: 150},
  w130: {width: 130},
  w125: {width: 125},
  w100: {width: 100},
  w110: {width: 110},
  w90: {width: 90},
  w80: {width: 80},
  w74: {width: 74},
  w68: {width: 68},
  w64: {width: 64},
  w60: {width: 60},
  w50: {width: 50},
  w48: {width: 44},
  w40: {width: 40},
  w30: {width: 30},
  w32: {width: 32},
  w36: {width: 36},
  w24: {width: 24},
  w20: {width: 20},
  w16: {width: 16},
  w18: {width: 18},
  w15: {width: 15},
  w12: {width: 12},
  w10: {width: 10},

  // Width %
  w100pr: {width: '100%'},
  w95pr: {width: '95%'},
  w90pr: {width: '90%'},
  w85pr: {width: '85%'},
  w80pr: {width: '80%'},
  w82pr: {width: '82%'},
  w70pr: {width: '70%'},
  w60pr: {width: '60%'},
  w65pr: {width: '65%'},
  w55pr: {width: '55%'},
  w50pr: {width: '50%'},
  w47pr: {width: '47%'},
  w45pr: {width: '45%'},
  w40pr: {width: '40%'},
  w35pr: {width: '35%'},
  w30pr: {width: '30%'},
  w20pr: {width: '20%'},
  w25pr: {width: '25%'},
  w10pr: {width: '10%'},
  w15pr: {width: '15%'},

  // minWidth %
  minWidth90pr: {minWidth: '90%'},
  minWidth70pr: {minWidth: '70%'},
  minWidth50pr: {minWidth: '50%'},
  minWidth30pr: {minWidth: '30%'},
  minWidth10pr: {minWidth: '10%'},

  // Width %
  maxWidth100pr: {maxWidth: '100%'},
  maxWidth90pr: {maxWidth: '90%'},
  maxWidth70pr: {maxWidth: '70%'},
  maxWidth50pr: {maxWidth: '50%'},
  maxWidth30pr: {maxWidth: '30%'},
  maxWidth10pr: {maxWidth: '10%'},

  // Height
  h400: {height: 400},
  h300: {height: 300},
  h280: {height: 280},
  h250: {height: 250},
  h225: {height: 225},
  h216: {height: 216},
  h200: {height: 200},
  h175: {height: 175},
  h150: {height: 150},
  h130: {height: 130},
  h135: {height: 135},
  h125: {height: 125},
  h105: {height: 105},
  h104: {height: 104},
  h100: {height: 100},
  h90: {height: 90},
  h80: {height: 80},
  h76: {height: 76},
  h74: {height: 74},
  h68: {height: 68},
  h64: {height: 64},
  h55: {height: 55},
  h50: {height: 50},
  h40: {height: 40},
  h45: {height: 45},
  h48: {height: 48},
  h36: {height: 36},
  h35: {height: 35},
  h32: {height: 32},
  h30: {height: 30},
  h29: {height: 29},
  h24: {height: 24},
  h20: {height: 20},
  h18: {height: 18},
  h16: {height: 16},
  h15: {height: 15},
  h12: {height: 12},
  h10: {height: 10},
  h8: {height: 8},
  h5: {height: 5},
  h2: {height: 2},
  h1: {height: 1},

  // Height %
  h100pr: {height: '100%'},
  h90pr: {height: '90%'},
  h80pr: {height: '80%'},
  h70pr: {height: '70%'},
  h60pr: {height: '60%'},
  h50pr: {height: '50%'},
  h40pr: {height: '40%'},
  h30pr: {height: '30%'},
  h20pr: {height: '20%'},
  h15pr: {height: '15%'},
  h10pr: {height: '10%'},

  // Padding
  p0: {padding: 0},
  p2: {padding: 2},
  p5: {padding: 5},
  p10: {padding: 10},
  p15: {padding: 15},
  p20: {padding: 20},
  p25: {padding: 25},
  p30: {padding: 30},
  p35: {padding: 35},
  p40: {padding: 40},
  p45: {padding: 45},
  p50: {padding: 50},
  p55: {padding: 55},
  p60: {padding: 60},
  p80: {padding: 80},

  // paddingRight
  pr0: {paddingRight: 0},
  pr2: {paddingRight: 2},
  pr5: {paddingRight: 5},
  pr8: {paddingRight: 8},
  pr10: {paddingRight: 10},
  pr15: {paddingRight: 15},
  pr16: {paddingRight: 16},
  pr20: {paddingRight: 20},
  pr24: {paddingRight: 24},
  pr30: {paddingRight: 30},
  pr35: {paddingRight: 35},
  pr40: {paddingRight: 40},
  pr44: {paddingRight: 44},
  pr45: {paddingRight: 45},

  // paddingTop
  pt0: {paddingTop: 0},
  pt2: {paddingTop: 2},
  pt5: {paddingTop: 5},
  pt10: {paddingTop: 10},
  pt12: {paddingTop: 12},
  pt16: {paddingTop: 16},
  pt20: {paddingTop: 20},
  pt25: {paddingTop: 25},
  pt30: {paddingTop: 30},
  pt32: {paddingTop: 32},
  pt35: {paddingTop: 35},
  pt40: {paddingTop: 40},
  pt45: {paddingTop: 45},
  pt50: {paddingTop: 50},
  pt55: {paddingTop: 55},
  pt60: {paddingTop: 60},
  pt65: {paddingTop: 65},
  pt70: {paddingTop: 70},
  pt80: {paddingTop: 80},

  // paddingBottom
  pb0: {paddingBottom: 0},
  pb5: {paddingBottom: 5},
  pb8: {paddingBottom: 8},
  pb10: {paddingBottom: 10},
  pb16: {paddingBottom: 16},
  pb20: {paddingBottom: 20},
  pb25: {paddingBottom: 28},
  pb30: {paddingBottom: 30},
  pb32: {paddingBottom: 32},
  pb35: {paddingBottom: 35},
  pb40: {paddingBottom: 40},
  pb45: {paddingBottom: 45},
  pb50: {paddingBottom: 50},
  pb70: {paddingBottom: 70},
  pb100: {paddingBottom: 100},
  pb200: {paddingBottom: 200},

  // paddingLeft
  pl0: {paddingLeft: 0},
  pl2: {paddingLeft: 2},
  pl5: {paddingLeft: 5},
  pl8: {paddingLeft: 8},
  pl10: {paddingLeft: 10},
  pl16: {paddingLeft: 16},
  pl20: {paddingLeft: 20},
  pl25: {paddingLeft: 25},
  pl30: {paddingLeft: 30},
  pl35: {paddingLeft: 35},
  pl40: {paddingLeft: 40},
  pl45: {paddingLeft: 45},
  pl60: {paddingLeft: 60},
  pl100: {paddingLeft: 260},

  // paddingHorizontal
  ph0: {paddingHorizontal: 0},
  ph2: {paddingHorizontal: 2},
  ph4: {paddingHorizontal: 4},
  ph5: {paddingHorizontal: 5},
  ph8: {paddingHorizontal: 8},
  ph10: {paddingHorizontal: 10},
  ph12: {paddingHorizontal: 12},
  ph15: {paddingHorizontal: 15},
  ph16: {paddingHorizontal: 16},
  ph20: {paddingHorizontal: 20},
  ph25: {paddingHorizontal: 25},
  ph30: {paddingHorizontal: 30},
  ph35: {paddingHorizontal: 35},
  ph40: {paddingHorizontal: 40},
  ph45: {paddingHorizontal: 45},
  ph80: {paddingHorizontal: 80},

  // paddingVertical
  pv0: {paddingVertical: 0},
  pv2: {paddingVertical: 2},
  pv4: {paddingVertical: 4},
  pv6: {paddingVertical: 6},
  pv5: {paddingVertical: 5},
  pv8: {paddingVertical: 8},
  pv10: {paddingVertical: 10},
  pv12: {paddingVertical: 12},
  pv16: {paddingVertical: 16},
  pv20: {paddingVertical: 20},
  pv24: {paddingVertical: 24},
  pv30: {paddingVertical: 30},
  pv32: {paddingVertical: 32},
  pv35: {paddingVertical: 35},
  pv40: {paddingVertical: 40},
  pv45: {paddingVertical: 45},

  // margin
  m5: {margin: 5},
  m10: {margin: 10},
  m15: {margin: 15},
  m20: {margin: 20},
  m25: {margin: 25},
  m30: {margin: 30},
  m35: {margin: 35},
  m40: {margin: 40},
  m45: {margin: 45},

  // marginRight
  mr5: {marginRight: 5},
  mr4: {marginRight: 4},
  mr8: {marginRight: 8},
  mr10: {marginRight: 10},
  mr12: {marginRight: 12},
  mr16: {marginRight: 16},
  mr18: {marginRight: 20},
  mr20: {marginRight: 20},
  mr24: {marginRight: 24},
  mr30: {marginRight: 30},
  mr35: {marginRight: 35},
  mr40: {marginRight: 40},
  mr45: {marginRight: 45},
  mr60: {marginRight: 60},
  mr70: {marginRight: 70},

  // marginLeft
  ml2: {marginLeft: 2},
  ml4: {marginLeft: 4},
  ml8: {marginLeft: 8},
  ml10: {marginLeft: 10},
  ml16: {marginLeft: 16},
  ml20: {marginLeft: 20},
  ml25: {marginLeft: 25},
  ml30: {marginLeft: 30},
  ml35: {marginLeft: 35},
  ml40: {marginLeft: 40},
  ml45: {marginLeft: 45},
  ml55: {marginLeft: 55},
  ml85: {marginLeft: 85},

  // marginTop
  mt2: {marginTop: 2},
  mt5: {marginTop: 5},
  mt4: {marginTop: 4},
  mt8: {marginTop: 8},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt12: {marginTop: 12},
  mt16: {marginTop: 16},
  mt20: {marginTop: 20},
  mt25: {marginTop: 25},
  mt30: {marginTop: 30},
  mt32: {marginTop: 32},
  mt35: {marginTop: 35},
  mt40: {marginTop: 40},
  mt45: {marginTop: 45},
  mt50: {marginTop: 50},
  mt60: {marginTop: 0},
  mt70: {marginTop: 70},
  mt80: {marginTop: 80},
  mt90: {marginTop: 90},
  mt100: {marginTop: 100},
  mt135: {marginTop: 135},
  mt150: {marginTop: 150},
  mt230: {marginTop: 230},
  mt250: {marginTop: 250},

  // marginBottom
  mb0: {marginBottom: 0},
  mb2: {marginBottom: 2},
  mb5: {marginBottom: 5},
  mb8: {marginBottom: 8},
  mb10: {marginBottom: 10},
  mb12: {marginBottom: 12},
  mb16: {marginBottom: 16},
  mb20: {marginBottom: 20},
  mb24: {marginBottom: 24},
  mb25: {marginBottom: 25},
  mb28: {marginBottom: 28},
  mb30: {marginBottom: 30},
  mb32: {marginBottom: 32},
  mb35: {marginBottom: 35},
  mb40: {marginBottom: 40},
  mb45: {marginBottom: 45},
  mb60: {marginBottom: 60},
  mb64: {marginBottom: 64},
  mb80: {marginBottom: 80},
  mb100: {marginBottom: 100},
  mb120: {marginBottom: 120},
  mb150: {marginBottom: 150},
  mb180: {marginBottom: 180},
  mb200: {marginBottom: 200},
  mb300: {marginBottom: 300},

  // marginVertical
  mv0: {marginVertical: 0},
  mv5: {marginVertical: 5},
  mv10: {marginVertical: 10},
  mv12: {marginVertical: 12},
  mv16: {marginVertical: 16},
  mv20: {marginVertical: 20},
  mv24: {marginVertical: 24},
  mv30: {marginVertical: 30},
  mv32: {marginVertical: 32},
  mv35: {marginVertical: 35},
  mv40: {marginVertical: 40},
  mv45: {marginVertical: 45},
  mv50: {marginVertical: 50},

  // marginHorizontal
  mh0: {marginHorizontal: 0},
  mh3: {marginHorizontal: 3},
  mh5: {marginHorizontal: 5},
  mh8: {marginHorizontal: 8},
  mh10: {marginHorizontal: 10},
  mh12: {marginHorizontal: 12},
  mh16: {marginHorizontal: 16},
  mh20: {marginHorizontal: 20},
  mh25: {marginHorizontal: 25},
  mh30: {marginHorizontal: 30},
  mh35: {marginHorizontal: 35},
  mh40: {marginHorizontal: 40},
  mh45: {marginHorizontal: 45},
  mh50: {marginHorizontal: 50},

  // LINE //

  // Line Height
  lh5: {
    lineHeight: 5,
  },
  lh10: {
    lineHeight: 10,
  },
  lh15: {
    lineHeight: 15,
  },
  lh20: {
    lineHeight: 20,
  },
  lh25: {
    lineHeight: 25,
  },
  lh30: {
    lineHeight: 30,
  },
  lh35: {
    lineHeight: 35,
  },
});
