import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login/Login';
import EditArtikel from './src/components/Dashboard/EditArtikel';
import EditGaleri from './src/components/Dashboard/EditGaleri';
import DashboardHome from './src/components/Dashboard/DashboardHome';
import Layout from './src/components/Layout/Layout';
import About from './src/components/Pages/Aboute';
import Galery from './src/components/Pages/Galery';
import Home from './src/components/Pages/Home';
import Artikel1 from './src/components/Artikel/Artikel1';
import Artikel2 from './src/components/Artikel/Artikel2';
import Artikel3 from './src/components/Artikel/Artikel3';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Layout" component={Layout} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Galery" component={Galery} />
          <Stack.Screen name="Artikel1" component={Artikel1} />
          <Stack.Screen name="Artikel2" component={Artikel2} />
          <Stack.Screen name="Artikel3" component={Artikel3} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="EditArtikel" component={EditArtikel} />
          <Stack.Screen name="EditGaleri" component={EditGaleri} />
          <Stack.Screen name="DashboardHome" component={DashboardHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}