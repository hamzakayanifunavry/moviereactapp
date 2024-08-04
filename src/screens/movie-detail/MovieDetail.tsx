/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../../assets/css/style';
import {CustomText} from '../../components/texts/AppCustomText';
import {colors} from '../../assets/css/colors';
import AppButton from '../../components/buttons/AppButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppBadge from '../../components/badge/AppBadge';
import {AppHorizontalDivider} from '../../components/screenDivider/AppDivider';
import useGetMovieById from '../../hooks/rest/MovieById/useGetMovieById';
import {useNavigation} from '@react-navigation/native';
import {API_KEY} from '../../hooks/axios/serverConstants';

async function fetchTrailerUrl(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`,
  );
  const json = await response.json();
  return json.results[0]?.key
    ? `https://www.youtube.com/watch?v=${json.results[0].key}`
    : null;
}

export default function MovieDetail(props: any) {
  const {id} = props?.route?.params;
  const colorsArray = [colors.green, colors.pink, colors.purple, colors.yellow];
  const navigation: any = useNavigation();
  console.log('ID', id);
  const {data, isLoading} = useGetMovieById({id: id});
  // console.log(
  //   'datadata',
  //   'https://image.tmdb.org/t/p/w500' + data?.data?.poster_path,
  // );
  // const videoRef = useRef<VideoRef>(null);
  // const background = require('./background.mp4');
  const handleWatchTrailer = async () => {
    const trailerUrl = await fetchTrailerUrl(id); // Implement this API call
    navigation.navigate('TrailerScreen', {trailerUrl});
  };
  function convertDate(dateString: any) {
    const date = new Date(dateString);
    const options: any = {year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  }
  const genresArray = data?.data?.genres;
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
    <View style={[styles.root]}>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + data?.data?.poster_path,
        }}
        resizeMode="cover"
        fadeDuration={100}
        style={[
          styles.justifyContent_fe,
          styles.alinItems_c,
          styles.pb20,
          {
            backgroundColor: 'black',
            height: Dimensions.get('screen').height / 2,
          },
        ]}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
          }}
        />
        <View style={[styles.positionAb, {top: 20, left: 10}]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={[styles.ffm, styles.fs16, {color: colors.white}]}>
              <Icon name="arrow-back-ios" size={20} color={colors.white} />{' '}
              Watch
            </Text>
          </TouchableOpacity>
        </View>
        <CustomText style={[styles.ffm, styles.pb10, {color: colors.white}]}>
          {`In theaters ${convertDate(data?.data?.release_date)}`}
        </CustomText>
        <AppButton
          text="Get Tickets"
          buttonProps={{
            style: {backgroundColor: colors.sky_blue, marginBottom: 10},
            onPress: () => {
              navigation.navigate('SeatPlanScreen');
            },
          }}
        />
        <AppButton
          text="Watch Trailer"
          LeftC={<Icon name="play-arrow" size={16} color={colors.white} />}
          innerTextProps={{
            style: {marginLeft: 5},
          }}
          buttonProps={{
            style: {
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colors.sky_blue,
              marginBottom: 10,
            },
            onPress: handleWatchTrailer,
          }}
        />
      </ImageBackground>
      {/* {playTrailer && (
        // <Video
        //   source={background}
        //   ref={videoRef}
        //   onBuffer={() => console.log('Buffering...')}
        //   onError={() => console.log('Error Occurred')}
        // />
      )} */}
      <ScrollView style={[styles.p20]}>
        <CustomText style={[styles.ffm, styles.fs16, styles.pb10]}>
          Genres
        </CustomText>
        <ScrollView style={[styles.flexRow_fs, styles.mb16]} horizontal>
          {genresArray?.map((genre: any) => {
            const randomColor =
              colorsArray[Math.floor(Math.random() * colorsArray.length)];
            return (
              <AppBadge key={genre.id} color={randomColor} text={genre.name} />
            );
          })}
        </ScrollView>
        <AppHorizontalDivider />
        <CustomText style={[styles.ffm, styles.fs16, styles.pt10]}>
          Overview
        </CustomText>
        <CustomText style={[styles.ffr, styles.fs12, {color: colors.gray}]}>
          {data?.data?.overview}
        </CustomText>
      </ScrollView>
    </View>
  );
}
