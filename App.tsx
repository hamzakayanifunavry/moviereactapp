/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {colors} from './src/assets/css/colors';
import {
  DashboardIcon,
  MediaIcon,
  MoreIcon,
  WatchIcon,
} from './src/assets/imgs/svgs/SvgsIndex';
import {styles} from './src/assets/css/style';
import Watch from './src/screens/watch/Watch';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WatchCategories from './src/screens/watch/WatchCategories';
import MovieDetail from './src/screens/movie-detail/MovieDetail';
import SeatPlan from './src/screens/seat-plan/SeatPlan';
import SeatPlanConfirm from './src/screens/seat-plan-confirm/SeatPlanConfirm';
import MovieVideo from './src/screens/movie-video/MovieVideo';

const Stack = createNativeStackNavigator();

function Dashboard() {
  return (
    <View style={[styles.screenCenter]}>
      <Text>Dashboard!</Text>
    </View>
  );
}
function Media() {
  return (
    <View style={[styles.screenCenter]}>
      <Text>Media!</Text>
    </View>
  );
}

function More() {
  return (
    <View style={[styles.screenCenter]}>
      <Text>More!</Text>
    </View>
  );
}
function MainWatchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="WatchScreen"
        component={Watch}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="WatchCategoryScreen"
        component={WatchCategories}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MovieDetailScreen"
        component={MovieDetail}
      />
      <Stack.Screen
        name="SeatPlanScreen"
        component={SeatPlan}
        options={{
          title: 'Seat Plan',
        }}
      />
      <Stack.Screen
        name="SeatPlanConfirmScreen"
        component={SeatPlanConfirm}
        options={{
          title: 'Seat Plan Confirm',
        }}
      />
      <Stack.Screen
        name="TrailerScreen"
        component={MovieVideo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const AppTab = createBottomTabNavigator();
function App() {
  const queryClient = new QueryClient();
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AppTab.Navigator
          initialRouteName="Watch"
          screenOptions={({route}) => ({
            headerShown: true,
            unmountOnBlur: true,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: colors.white,
            tabBarStyle: {
              height: Platform.OS === 'ios' ? 100 : 75,
              backgroundColor: colors.primary,
              borderTopLeftRadius: 27,
              borderTopRightRadius: 27,
            },
            tabBarLabelStyle: [styles.ffr, styles.fs10, styles.mb10],
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => {
              if (route.name === 'Dashboard') {
                return (
                  <View style={[focused && innerStyles.tabBgColor]}>
                    <DashboardIcon props={{width: 18, height: 18}} />
                  </View>
                );
              } else if (route.name === 'Watch') {
                return (
                  <View style={[focused && innerStyles.tabBgColor]}>
                    <WatchIcon props={{width: 18, height: 18}} />
                  </View>
                );
              } else if (route.name === 'Media') {
                return (
                  <View style={[focused && innerStyles.tabBgColor]}>
                    <MediaIcon props={{width: 18, height: 18}} />
                  </View>
                );
              } else if (route.name === 'More') {
                return (
                  <View style={[focused && innerStyles.tabBgColor]}>
                    <MoreIcon props={{width: 18, height: 18}} />
                  </View>
                );
              }
            },
          })}>
          <AppTab.Screen name="Dashboard" component={Dashboard} />
          <AppTab.Screen
            name="Watch"
            component={MainWatchStack}
            options={{headerShown: false}}
          />
          <AppTab.Screen name="Media" component={Media} />
          <AppTab.Screen name="More" component={More} />
        </AppTab.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;

const innerStyles = StyleSheet.create({
  tab: {},
  tabBgColor: {
    backgroundColor: colors.primary,
  },
});
