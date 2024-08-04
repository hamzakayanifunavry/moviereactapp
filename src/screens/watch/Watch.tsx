/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import MovieCardList from '../../components/cards/MovieCardList';
import {styles} from '../../assets/css/style';
import useGetMovieList from '../../hooks/rest/MovieList/useGetMovieList';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AppSearch from '../../components/search/AppSearch';
import {colors} from '../../assets/css/colors';

export default function Watch() {
  const navigation: any = useNavigation();
  const {data, isLoading, refetch} = useGetMovieList();
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          padding: 50,
        }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View style={[{backgroundColor: 'white'}]}>
        <AppSearch showBorders={false} />
      </View>
      <FlatList
        keyExtractor={(item: any, index: number) => item?.id ?? index}
        data={data?.data?.results}
        renderItem={({item}) => (
          <View style={[styles.mt15, styles.ph15]}>
            <MovieCardList item={item} navigation={navigation} />
          </View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              flexDirection: 'row',
              padding: 50,
            }}>
            <Text style={{marginTop: 10, color: 'white'}}>No Movies Found</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
