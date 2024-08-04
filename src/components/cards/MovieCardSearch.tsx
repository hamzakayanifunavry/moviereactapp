import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../assets/css/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../assets/css/colors';
import {CustomText} from '../texts/AppCustomText';

export default function MovieCardSearch({item, navigation}) {
  return (
    <TouchableOpacity
      style={[styles.flexrow, styles.mv10, styles.justifyContent_sb]}
      onPress={() => {
        navigation.navigate('MovieDetailScreen', {id: item.id});
      }}>
      <View style={[styles.flexrow_ai_c_jc_sb, styles.w80pr]}>
        <View
          style={[
            styles.h100,
            styles.w130,
            styles.br10,
            {backgroundColor: 'black', overflow: 'hidden'},
          ]}>
          <Image
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + item?.poster_path,
            }}
            style={[styles.h100, styles.w130]}
          />
        </View>
        <View style={[styles.pl20, styles.w50pr]}>
          <CustomText style={[styles.ffm]}>{item?.title}</CustomText>
          <CustomText style={[styles.fs12, {color: colors.light_gray}]}>
            Fantasy
          </CustomText>
        </View>
      </View>
      <View>
        <Icon name="more-horiz" size={30} color={colors.sky_blue} />
      </View>
    </TouchableOpacity>
  );
}
