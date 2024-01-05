import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../features/home/view/HomeScreen';
import LoginScreen from '../../features/login/view/LoginScreen';
import { RootStackParamList, detailScreen, homeScreen, loginScreen } from './AppRouteNames';
import DetailScreen from '../../features/detail/view/DetailScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppRoute = () => {
  return (
    <RootStack.Navigator initialRouteName={homeScreen}>
      <RootStack.Screen name={homeScreen} component={HomeScreen} options={{
        headerShown: false,
        title: "Home",
      }} />
      <RootStack.Screen name={loginScreen} component={LoginScreen} options={{
        headerBackTitleVisible: false,
        headerTitle: "Halaman Login"
      }} />
      <RootStack.Screen name={detailScreen} component={DetailScreen} options={{
        headerBackTitleVisible: false,
        headerShown: true,
        title: "",
        headerTransparent: true,
        statusBarTranslucent: true,
        headerTintColor: "white"
      }} />
    </RootStack.Navigator>
  );
};

export default AppRoute;