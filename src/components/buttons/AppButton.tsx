// Libraries
import React from 'react';
import {TextProps, TouchableOpacity, TouchableOpacityProps} from 'react-native';

// Components
import {CustomText} from '../texts/AppCustomText';
import {styles} from '../../assets/css/style';
import {colors} from '../../assets/css/colors';

type TbuttonType = 'action' | 'plain' | 'action2' | 'plain2';

interface IAppButton {
  buttonProps?: TouchableOpacityProps;
  innerTextProps?: TextProps;
  text?: string;
  RightText?: React.ReactNode;
  LeftC?: React.ReactNode;
  RightC?: React.ReactNode;
  isLoading?: boolean;
  loaderColor?: string;
  buttonType?: TbuttonType;
  image?: string;
  innerIcon?: React.ReactNode;
}

const AppButton = ({
  buttonProps = {},
  innerTextProps = {},
  text,
  LeftC,
}: IAppButton) => {
  const {style: buttonStyle, ...buttonRest} = buttonProps;
  const {style: textStyle} = innerTextProps;

  return (
    <TouchableOpacity
      style={[
        styles.flexcol_ai_c_jc_c,
        styles.h50,
        styles.w50pr,
        styles.br10,
        buttonStyle,
      ]}
      {...buttonRest}>
      {/* Single Icon Button */}
      {LeftC && LeftC}
      <CustomText
        style={[
          styles.textAlign_c,
          styles.ffsm,
          styles.fs14,
          {color: colors.white},
          textStyle,
        ]}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

export default React.memo(AppButton);
