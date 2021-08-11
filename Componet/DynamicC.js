import * as React from 'react';
import  { useEffect,useState } from 'react';
import {ScrollView, Text,View, Image, StyleSheet ,Button,TextInput,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import CollapsibleView from "@eliav2/react-native-collapsible-view";

import { db, firestore, auth } from '../FirebaseConfig';
//import storage from '@react-native-firebase/storage';

const  DynamicC= props => {
  
  const reference = storage().ref('belfort.png');
    
    
//     function Load()
//     {
//         var userId = auth.currentUser.uid;
//         firestore.collection(userId).onSnapshot((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(doc.data()); // For data inside doc
//             Likes.push(doc.data());
//             console.log(doc.data().interest); // For doc name
//         })
//         console.log(Likes.length);
//         addHandler();
//     })
// }


    return (
        <View style={styles.container}>
        <Image source={{ uri: reference }} ></Image>
      </View>
    );
}
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
      },
      buttons2: {
          padding: 12,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          margin: 2,
          marginBottom: 10,
          borderColor: 'white',
          borderWidth: 1
      },
      buttonText2: {
          color: 'white',
          fontSize: 20,
         
      },
      inputsContainer: {
        flex: 1, marginBottom: 20
      },
      inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "lightgray"
      },
      iCont: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: "lightgray"
        }
  });
    
  export default DynamicC;