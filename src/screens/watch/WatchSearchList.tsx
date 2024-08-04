import {SafeAreaView} from 'react-native';
import React from 'react';
import MovieCardSearch from '../../components/cards/MovieCardSearch';
import {styles} from '../../assets/css/style';
import {CustomText} from '../../components/texts/AppCustomText';
import {AppHorizontalDivider} from '../../components/screenDivider/AppDivider';

export default function WatchSearchList() {
  return (
    <SafeAreaView style={[styles.p15]}>
      <CustomText
        style={[
          styles.ffm,
          styles.fs12,
          styles.mb5,
          {textTransform: 'capitalize'},
        ]}>
        top results
      </CustomText>
      <AppHorizontalDivider />
      <MovieCardSearch />
      <MovieCardSearch />

      {/* <MovieCardSearch />
      <MovieCardSearch />
      <MovieCardSearch />
      <MovieCardSearch /> */}
    </SafeAreaView>
  );
}
