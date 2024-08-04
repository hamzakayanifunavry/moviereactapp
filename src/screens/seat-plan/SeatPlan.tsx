import {View, ScrollView, Image} from 'react-native';
import React from 'react';
import AppButton from '../../components/buttons/AppButton';
import {colors} from '../../assets/css/colors';
import {styles} from '../../assets/css/style';
import {CustomText} from '../../components/texts/AppCustomText';
import DateBadge from '../../components/badge/DateBadge';
import {useNavigation} from '@react-navigation/native';

export default function SeatPlan() {
  const navigation: any = useNavigation();
  const dateArray = [];

  for (let day = 1; day <= 30; day++) {
    const dateObject = {
      id: day,
      name: `Aug ${day}`,
    };
    dateArray.push(dateObject);
  }
  return (
    <View style={[styles.root, {justifyContent: 'center'}]}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{padding: 16}}>
          <CustomText style={[styles.ffm, styles.fs16, styles.pb10]}>
            Date
          </CustomText>
          <ScrollView
            style={[{height: 40}]}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {dateArray?.map((date: any) => {
              return (
                <DateBadge
                  key={date.id}
                  color={colors.sky_blue}
                  text={date.name}
                />
              );
            })}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(
              (item, index) => {
                return (
                  <View key={index} style={{marginRight: 10}}>
                    <View style={[styles.pb5, {flexDirection: 'row'}]}>
                      <CustomText style={[styles.ffm, styles.fs12]}>
                        12:30{' '}
                      </CustomText>
                      <CustomText
                        style={[styles.ffr, styles.fs12, {color: colors.gray}]}>
                        Cinetech + hall 1
                      </CustomText>
                    </View>
                    <View
                      style={[
                        styles.w225,
                        styles.h150,
                        styles.br10,
                        {
                          backgroundColor: colors.white,
                          borderColor: colors.sky_blue,
                          borderWidth: 1,
                          alignItems: 'center',
                        },
                      ]}>
                      <Image
                        source={require('../../assets/imgs/pngs/seatMap.png')}
                        style={{height: 150, width: 110}}
                      />
                    </View>
                    <CustomText
                      style={[
                        styles.ffm,
                        styles.fs12,
                        styles.pt10,
                        {color: colors.gray},
                      ]}>
                      From{' '}
                      <CustomText
                        style={[
                          styles.ffb,
                          styles.fs12,
                          styles.pb10,
                          {color: colors.primary},
                        ]}>
                        50${' '}
                      </CustomText>
                      or{' '}
                      <CustomText
                        style={[
                          styles.ffb,
                          styles.fs12,
                          styles.pb10,
                          {color: colors.primary},
                        ]}>
                        2500{' '}
                      </CustomText>
                      bonus
                    </CustomText>
                  </View>
                );
              },
            )}
          </ScrollView>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
        <AppButton
          text="Select Seats"
          buttonProps={{
            style: {
              backgroundColor: colors.sky_blue,
              marginBottom: 10,
              width: '90%',
            },
            onPress: () => {
              navigation.navigate('SeatPlanConfirmScreen');
            },
          }}
        />
      </View>
    </View>
  );
}
