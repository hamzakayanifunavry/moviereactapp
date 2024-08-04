import {Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppButton from './AppButton';
import {styles} from '../../assets/css/style';
import {colors} from '../../assets/css/colors';

export default function BackButton({title}: string) {
  const navigation = useNavigation();
  return (
    <AppButton
      LeftC={
        <Text
          style={{
            fontFamily: styles?.ffr?.fontFamily,
            color: colors?.light_gray,
            fontSize: 14,
            paddingRight: 10,
          }}>
          {title}
        </Text>
      }
      buttonProps={{
        style: {position: 'absolute', right: 0},
        onPress: () => {
          navigation.goBack();
        },
      }}
    />
  );
}
