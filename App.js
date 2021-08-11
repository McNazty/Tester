import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainP from './Componet/MainP';
import DynamicC from './Componet/DynamicC';
import Profile from'./Componet/Profile';
import Login from'./Componet/Login';
import Signup from'./Componet/signup';
import Edit from './Componet/Edit'
import TakePictureScreen from './screens/TakePictureScreen';
export default function App() {
  return (
    //<Signup></Signup>
    //<Login></Login>
 //<Profile></Profile>
   //<MainP></MainP>
   <Edit></Edit>
   //<TakePictureScreen></TakePictureScreen>
  //<DynamicC></DynamicC>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
