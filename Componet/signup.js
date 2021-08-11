import React, { useState } from 'react';
import { Alert, View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
//import { styles } from '../styles/styles';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import { db, firestore, auth } from '../FirebaseConfig';
var Sex = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
    { label: "Other", value: 2 }
]



const Signup = props => {


    [registrationEmail, setRegistrationEmail] = useState('');
    [registrationPassword, setRegistrationPassword] = useState('');
    [registed, setRegistered] = useState(false);
    [FirstName, setFirstName] = useState('');
    [LastName, setLastName] = useState('');
    [Age, setAge] = useState();
    [Gender, setGender] = useState('');


    [disable, setDisable] = useState(true);
    registerWithFirebase = () => {
        if (registrationEmail.length < 4) {
            Alert.alert('Please enter an email address.');
            return;
        }

        if (registrationPassword.length < 4) {
            Alert.alert('Please enter a password.');
            return;
        }

        auth.createUserWithEmailAndPassword(registrationEmail, registrationPassword)
            .then(function (_firebaseUser) {

                Disablehandler();
                setRegistrationEmail('');
                setRegistrationPassword('');

            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    Alert.alert('The password is too weak.');
                }
                else {
                    Alert.alert(errorMessage);
                }
                console.log(error);
            }
            );
    }
    function saveUserData(){
        var userId = auth.currentUser.uid;
        if(Gender =="")
        {
            Gender = 0;
        }

        console.log("Called ")
    
        // SAVE DATA TO FIRESTORE
        firestore.collection('TestUsers').doc(userId).set(
          {
            Age: Age,
            FirstName: FirstName,
            LastName: LastName,
            Gender: Gender,
         
          },
          {
            merge: true // set with merge set to true to make sure we don't blow away existing data we didnt intend to
          }
        )
          .then(function () {
            Alert.alert('user registered!');
          })
          .catch(function (error) {
            Alert.alert('Error writing document');
            console.log('Error writing document: ', error);
          });
    }


    Disablehandler = () => {
        setDisable(false);
       
    };
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
        setTitleValue(text);
    };

    return (
        <View style={styles.screen}>

            {disable &&
                <View style={styles.screen}>
                    <View style={styles.header}></View>
                    <Text h4 style={styles.mainText}>SignUp</Text>
                    

                    <View style={styles.screen2}>

                            
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => setRegistrationEmail(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                placeholder="  email"
                                placeholderTextColor="white"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => setRegistrationPassword(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoCompleteType="password"
                                keyboardType="visible-password"
                                placeholder="  password"
                                placeholderTextColor="white"
                            />
                            <TouchableOpacity onPress={registerWithFirebase}>
                                <View style={styles.buttons2}>
                                    <Text style={styles.buttonText2}>Register</Text>
                                </View>
                            </TouchableOpacity>
                        
                    </View>
                </View>
            }
            { !disable &&
                <View style={styles.screen}>
                    <View style={styles.header}></View>
                    <Text h4 style={styles.mainText}>Enter your information</Text>
                    <View style={styles.screen2}>
                     
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="  First Name"
                            placeholderTextColor="white"
                            autoCapitalize="none"
                            onChangeText={(value) => setFirstName(value)}
                        />
                        
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="  Last Name"
                            placeholderTextColor="white"
                            autoCapitalize="none"
                            onChangeText={(value) => setLastName(value)}
                        />
                        
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="  Age"
                            placeholderTextColor="white"
                            autoCapitalize="none"
                            onChangeText={(value) => setAge(value)}
                        />
                     
                        <Text style={styles.text}>Gender</Text>
                        <RadioForm
                            radio_props={Sex}
                            onPress={(value) => {setGender(value) }}
                            formHorizontal={true}
                            
                            ></RadioForm>
                       
                            <TouchableOpacity  onPress={saveUserData}>
                                <View style={styles.buttons2}>
                                    <Text style={styles.buttonText2}>Register</Text>
                                </View>
                            </TouchableOpacity>
                  
                    
                    </View>
                </View>
            }

        </View>

    )
}

Signup.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('screenTitle')
    };
}
const styles = StyleSheet.create({

    text:{
        color: 'white'
    },
    form: {
        padding: 80,
        textAlign: 'center'
    },
    header:{
        backgroundColor: "#538a8f",
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
})

export default Signup;