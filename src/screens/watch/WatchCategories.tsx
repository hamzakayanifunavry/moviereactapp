/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../assets/css/style';
import MovieCardCategories from '../../components/cards/MovieCardCategories';
import AppSearch from '../../components/search/AppSearch';
import useGetMovieCategories from '../../hooks/rest/MovieCategories/useGetMovieCategories';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../assets/css/colors';
import axios from 'axios';
import {API_KEY} from '../../hooks/axios/serverConstants';
import {CustomText} from '../../components/texts/AppCustomText';
import {AppHorizontalDivider} from '../../components/screenDivider/AppDivider';
import MovieCardSearch from '../../components/cards/MovieCardSearch';
import useGetMovieList from '../../hooks/rest/MovieList/useGetMovieList';

export default function WatchCategories() {
  const navigation: any = useNavigation();
  const [genreList, setgenreList] = useState([]);
  const [search, setSearch] = useState('');
  const apiKey = API_KEY;
  const language = 'en-US';
  const {data, isLoading, refetch} = useGetMovieList();
  if (!isLoading) {
    console.log(data?.data);
  }
  useEffect(() => {
    getGenresWithImages().then(genres => {
      setgenreList(genres);
    });
  }, []);

  // Function to get genres
  async function getGenres() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`,
    );
    return response.data.genres;
  }

  // Function to get a movie image for a given genre
  async function getMovieForGenre(genreId) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=${language}`,
    );
    const movies = response.data.results;
    if (movies.length > 0) {
      return movies[0].poster_path; // Return the image path of the first movie found
    }
    return null;
  }

  // Function to get genres with movie images
  async function getGenresWithImages() {
    const genres = await getGenres();
    const genresWithImages = await Promise.all(
      genres.map(async genre => {
        const movieImage = await getMovieForGenre(genre.id);
        return {
          ...genre,
          movieImage: movieImage
            ? `https://image.tmdb.org/t/p/w500${movieImage}`
            : null,
        };
      }),
    );
    return genresWithImages;
  }
  // if (isLoading) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         flexDirection: 'row',
  //         padding: 50,
  //       }}>
  //       <ActivityIndicator size="large" color={colors.primary} />
  //     </View>
  //   );
  // }
  return (
    <SafeAreaView>
      <View style={[styles.ph16, {backgroundColor: 'white'}]}>
        <AppSearch showBorders={true} search={search} setSearch={setSearch} />
      </View>
      <View style={[styles.p15, styles.flexrow_ai_c_jc_sb, styles.flexwrap]}>
        {search == '' && (
          <FlatList
            keyExtractor={(item: any, index: number) => item?.id ?? index}
            data={genreList}
            renderItem={({item}) => (
              <MovieCardCategories item={item} navigation={navigation} />
            )}
            numColumns={2}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  padding: 50,
                }}>
                <Text style={{marginTop: 10, color: colors.primary}}>
                  No Genres Found
                </Text>
              </View>
            )}
          />
        )}
        {search != '' && (
          <View style={{flex: 1}}>
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
            <ScrollView showsVerticalScrollIndicator={false}>
              {data?.data?.results
                .filter(item => {
                  return item.title.includes(search);
                })
                .map((item, index) => {
                  return (
                    <MovieCardSearch
                      key={index}
                      item={item}
                      navigation={navigation}
                    />
                  );
                })}
            </ScrollView>
            {/* <FlatList
              keyExtractor={(item: any, index: number) => item?.id ?? index}
              data={data?.data?.results}
              renderItem={({item}) => (
                <MovieCardSearch item={item} navigation={navigation} />
              )}
              ListEmptyComponent={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 50,
                  }}>
                  <Text style={{marginTop: 10, color: 'white'}}>
                    No Search Found
                  </Text>
                </View>
              )}
            /> */}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
