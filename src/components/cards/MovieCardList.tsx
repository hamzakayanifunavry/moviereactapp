import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {styles} from '../../assets/css/style';
import {colors} from '../../assets/css/colors';

export default function MovieCardList({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('MovieDetailScreen', {id: item.id});
      }}>
      <ImageBackground
        source={{uri: 'https://image.tmdb.org/t/p/w500' + item?.poster_path}}
        resizeMode="cover"
        fadeDuration={100}
        style={[
          styles.h175,
          styles.w100pr,
          styles.br10,
          styles.justifyContent_fe,
          styles.mb10,
          {overflow: 'hidden', backgroundColor: colors.primary},
        ]}>
        {/* Opacity overlay */}
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
          }}
        />

        {/* Text Content */}
        <View style={{padding: 15}}>
          <Text style={[styles.ffm, styles.fs18, {color: colors.white}]}>
            {item?.title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
