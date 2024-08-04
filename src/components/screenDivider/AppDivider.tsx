import React from 'react';
import {View} from 'react-native';
import {colors} from '../../assets/css/colors';

export const AppHorizontalDivider = ({style}: any) => {
  return (
    <View
      style={{
        width: style?.width || '100%',
        height: 1,
        backgroundColor: colors?.light_gray,
        ...style,
      }}
    />
  );
};

export const AppVerticalDivider = ({style}: any) => {
  return (
    <View
      style={{
        width: 1,
        height: style?.height || '100%',
        backgroundColor: colors?.light_gray,
        ...style,
      }}
    />
  );
};
