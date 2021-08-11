import * as React from 'react';
import  { useEffect,useState } from 'react';
import {Alert,ScrollView, Text,View, Image, StyleSheet ,Button,TextInput,TouchableOpacity} from 'react-native';

//import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons';
import { storage,db, firestore, auth } from '../FirebaseConfig';
//import storage from '@react-native-firebase/storage';

const  Edit = props => {
    
    [FName , setFName] = useState();
    [LName , setLName] = useState();
    [Age , setAge] = useState();
    [Gender , setGender] = useState();
    [StorageURL, setStorageURL] = useState('');
    [UpdateFName , setUpdatedFName] = useState();
    [UpdateLName , setUpdatedLName] = useState();
    [UpdateAge , setUpdatedAge] = useState();
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
        firestore.collection("TestUsers").doc("13QQ5Uz1xFd5gaio8XiENqqznqI3").get().then((doc) => {
    
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
function SaveData(){
    //var userId = auth.currentUser.uid;
    if(Gender ==null)
    {
        setGender(0) ;
    }
    if(UpdateAge == null)
    {
        setUpdatedAge(Age)
    }
    if(UpdateFName == null)
    {
        setUpdatedFName(FName)
    }
    if(UpdateLName == null)
    {
        setUpdatedLName(LName)
    }


    console.log("First:"+UpdateFName+" Last:"+UpdateLName+" Age:"+UpdateAge);

    // SAVE DATA TO FIRESTORE
    firestore.collection('TestUsers').doc("13QQ5Uz1xFd5gaio8XiENqqznqI3").set(
      {
        Age: UpdateAge,
        FirstName: UpdateFName,
        LastName: UpdateLName,
        Gender: Gender
       
     
      },
      {
        merge: true // set with merge set to true to make sure we don't blow away existing data we didnt intend to
      }
    )
      .then(function () {
        Alert.alert('User Updated');
      })
      .catch(function (error) {
        Alert.alert('Error writing document');
        console.log('Error writing document: ', error);
      });
}


    return (
          
        <View style={styles.screen}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: StorageURL}}/>
        <View style={styles.screen2}>
         
        <TextInput
        style={styles.input}
        onChangeText={(value) => setUpdatedFName(value)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        placeholder={FName}
        placeholderTextColor="white"
    />

<TextInput
        style={styles.input}
        onChangeText={(value) => setUpdatedLName(value)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        placeholder={LName}
        placeholderTextColor="white"
    />

<TextInput
        style={styles.input}
        onChangeText={(value) => setUpdatedAge(value)}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        placeholder={Age}
        placeholderTextColor="white"
    />
         
         
           
         
           
                <TouchableOpacity  onPress ={SaveData}>
                    <View style={styles.buttons2}>
                        <Text style={styles.buttonText2}>Save</Text>
                    </View>
                </TouchableOpacity>
      
        
        </View>
    </View>
      
    
    );
}
  const styles = StyleSheet.create({
    text:{
        color: 'white'
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
        marginTop:70
      },
    form: {
        padding: 80,
        textAlign: 'center'
    },
    header:{
        backgroundColor: "#6a707c",
        height:150,
      },
    layout: {

        marginTop: 1,
        flexDirection: "column"
    },
    screen: {
        flex: 1,
        padding: 0,
        backgroundColor: '#6a707c'
    },
    screen2: {
        flex: 1,
        marginTop:50,
        padding: 20,
        backgroundColor: '#6a707c'
    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttons: {
        padding: 12,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 2,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    buttonText: {
        color: 'black',
        fontSize: 20,

    },
    buttons2: {
        padding: 12,
        backgroundColor: '#538a8f',
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
    mainText: {
        marginBottom: 20,
        color: 'white',

        textAlign: 'center',
        fontSize: 35
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#538a8f',
        borderWidth: 1,
        borderRadius:30,
        color: 'white',
        
      },
    slightlySmallerText: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        color: '#a9a9a9',

    }
  });
    
  export default Edit;