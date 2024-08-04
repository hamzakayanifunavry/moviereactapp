// Libraries
import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {colors} from '../../assets/css/colors';
import {styles} from '../../assets/css/style';

// Interfaces
interface ICustomText {
  children: any;
  style?: StyleProp<TextStyle>;
  textProps?: TextProps;
}

export const CustomText = ({children, style, textProps = {}}: ICustomText) => {
  const {style: textStyle, ...restProps} = textProps;
  return (
    <Text
      style={[
        {
          color: colors.primary,
          textAlign: 'left',
        },
        styles.fs16,
        styles.ffr,
        style,
      ]}
      {...restProps}>
      {children}
    </Text>
  );
};
