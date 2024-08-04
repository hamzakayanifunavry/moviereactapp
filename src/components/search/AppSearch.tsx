/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../../assets/css/style';
import {
  CrossIconBlack,
  SearchIconBlack,
} from '../../../src/assets/imgs/svgs/SvgsIndex';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../assets/css/colors';

export default function AppSearch(props: any) {
  const navigation: any = useNavigation();
  const {showBorders, search, setSearch} = props;
  return (
    <View
      style={[
        {
          width: '100%',
          height: 52,
          backgroundColor: showBorders ? '#F2F2F6' : 'transparent',
          borderRadius: 26,
          marginVertical: 10,
        },
        showBorders ? {borderWidth: 0, borderColor: 'black'} : {},
      ]}>
      <View
        style={[
          styles.flexrow_jc_sb,
          styles.ph10,
          {
            backgroundColor: 'transparent',
            alignItems: 'center',
            paddingVertical: showBorders ? 0 : 12,
          },
        ]}>
        {showBorders ? (
          <View style={[styles.flexrow_ai_c_jc_fs, styles.pl5]}>
            <SearchIconBlack props={{width: 18, height: 18}} />
            <TextInput
              style={[
                styles.pl10,
                styles.ffr,
                styles.fs12,
                {marginTop: 5, width: '80%'},
              ]}
              onChangeText={setSearch}
              value={search}
              placeholder="TV shows, movies and more"
              placeholderTextColor={colors.gray}
            />
          </View>
        ) : (
          <Text
            style={[styles.ffm, styles.fs16, styles.ph10, {color: '#202C43'}]}>
            Watch
          </Text>
        )}
        {showBorders ? (
          <TouchableOpacity
            onPress={() => setSearch('')}>
            <CrossIconBlack
              props={{width: 24, height: 24}}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('WatchCategoryScreen')}>
            <SearchIconBlack
              props={{width: 18, height: 18}}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
