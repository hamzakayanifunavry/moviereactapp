import {View, Text, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../assets/css/colors';
import {styles} from '../../assets/css/style';

export default function MovieCardCategories({item, navigation}) {
  return (
    <TouchableOpacity
      style={[
        styles.h100,
        styles.w47pr,
        styles.br10,
        styles.justifyContent_fe,
        styles.mb10,
        styles.mr10,
        {overflow: 'hidden', backgroundColor: colors.primary},
      ]}
      onPress={() => {
        navigation.navigate('WatchScreen', {id: item.id});
      }}>
      <ImageBackground
        source={{uri: item?.movieImage}}
        resizeMode="cover"
        fadeDuration={100}
        style={{
          flex: 1, // Take full available space
          justifyContent: 'flex-end', // Align content at the bottom
        }}
        // style={[
        //   styles.h100,
        //   styles.w47pr,
        //   styles.br10,
        //   styles.justifyContent_fe,
        //   styles.mb10,
        //   styles.mr10,
        //   {overflow: 'hidden', backgroundColor: colors.primary},
        // ]}
      >
        {/* Opacity overlay */}
        <View style={{ 
          ...StyleSheet.absoluteFillObject, // Covers entire image
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
        }} />

        {/* Text Content */}
        <View style={{ 
          flex: 1, 
          justifyContent: 'flex-end', 
          padding: 10,
        }}>
          <Text
            style={[
              styles.ffm,
              styles.fs16,
              {color: colors.white},
            ]}
          >
            {item.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
