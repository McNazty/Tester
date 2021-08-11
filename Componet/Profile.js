import * as React from 'react';
import  { useEffect,useState } from 'react';
import {ScrollView, Text,View, Image, StyleSheet ,Button,TextInput,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import CollapsibleView from "@eliav2/react-native-collapsible-view";
//import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons';
import { storage,db, firestore, auth } from '../FirebaseConfig';
//import storage from '@react-native-firebase/storage';

const  Profile = props => {
    
    [FName , setFName] = useState();
    [LName , setLName] = useState();
    [Age , setAge] = useState();
    [Gender , setGender] = useState();
    [StorageURL, setStorageURL] = useState('');
    [SettingsURL, setStorageURL] = useState('');

    useEffect(() => {
    Load();
    }, );
    
    function Load()
    {
      var storageRef = storage.ref('Default Pic.png');
      storageRef.getDownloadURL().then(function(url){
        console.log(url)
        setStorageURL(url)
      })
   

      
        //var userId = auth.currentUser.uid;
        firestore.collection("TestUsers").doc("IDstuff").get().then((doc) => {
    
            console.log(doc.data().FirstName); // For doc name
            console.log(doc.data().LastName);
            console.log(doc.data().Gender);
            console.log(doc.data().Age);
            setFName(doc.data().FirstName);
            setLName(doc.data().LastName);
            setGender(doc.data().Gender);
            setAge(doc.data().Age);
      
        
        
    })
}


    return (
        
    <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: StorageURL}}/>
          <View style={styles.body}>
         
            <View style={styles.bodyContent}>
             
              <View style={styles.buttonContainer}>
                <Text>{FName} {LName} </Text> 
                 
              </View>              
              <View style={styles.buttonContainer}>
                <Text>{Age}</Text> 
              </View>
            </View>
            <TouchableOpacity> 
            <Image style={styles.avatar2} source={require('../Pics/EditBtn.png')}/>
            </TouchableOpacity>
        </View>
      </View>
    
    );
}
  const styles = StyleSheet.create({
    header:{
        backgroundColor: "#538a8f",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:60
      },
      avatar2: {
        width: 70,
        height: 70,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        right:40,
        position: 'absolute',
        marginTop:500
      },
      name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
      },
      body:{
        marginTop:10,
        
      },
      container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#6a707c'
      },
      bodyContent: {
        flex: 2,
        alignItems: 'center',
        padding:10,
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:200,
        borderRadius:30,
        backgroundColor: "#538a8f",
      },
  });
    
  export default Profile;