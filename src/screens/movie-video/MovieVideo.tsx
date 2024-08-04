import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../components/buttons/AppButton';
import {colors} from '../../assets/css/colors';
import YouTubeIframe from 'react-native-youtube-iframe';

export default function MovieVideo({route}) {
  const {trailerUrl} = route.params;
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback(
    state => {
      if (state === 'ended') {
        setPlaying(false);
        navigation.goBack(); // Navigate back to the MovieDetail screen when the trailer ends
      }
    },
    [navigation],
  );

  const handleDone = () => {
    setPlaying(false);
    navigation.goBack(); // Navigate back when the "Done" button is pressed
  };

  const getYouTubeVideoId = url => {
    const regExp =
      /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|&v=|\/shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(trailerUrl);

  return (
    <View style={styles.container}>
      {videoId && (
        <YouTubeIframe
          height={Dimensions.get('screen').height - 500}
          width={Dimensions.get('screen').width}
          videoId={videoId}
          play={playing}
          onChangeState={onStateChange}
        />
      )}
      <AppButton
        text="Done"
        buttonProps={{
          style: {backgroundColor: colors.sky_blue, marginBottom: 10},
          onPress: handleDone,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
