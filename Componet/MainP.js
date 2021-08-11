import * as React from 'react';
import  { useEffect,useState } from 'react';
import { Text,View, Image, StyleSheet ,Button} from 'react-native';
import * as Progress from 'react-native-progress';
import CollapsibleView from "@eliav2/react-native-collapsible-view";

import { storage,db, firestore, auth } from '../FirebaseConfig';

const Bar = props => {
  // Bar-Belfort 
  [BPersonCount , setPersonCountB] = useState();
  [BProgressB , setProgressBB] = useState();
  [BProgressColor, setColorB] = useState();
  [BPeopleinString, setPeopleinStringB] = useState();
  [BopenDT , setOpenDTB] =useState ();
  [BDeals , setDealsB] = useState();
  [BURI , setBURI] = useState();
 // Bar-Jacks 
 [JPersonCount , setPersonCountJ] = useState();
 [JProgressB , setProgressBJ] = useState();
 [JProgressColor, setColorJ] = useState();
 [JPeopleinString, setPeopleinStringJ] = useState();
 [JopenDT , setOpenDTJ] =useState ();
 [JDeals , setDealsJ] = useState();
 [JURI , setJURI] = useState();
 // Bar-Ceeps
 [CPersonCount , setPersonCountC] = useState();
 [CProgressB , setProgressBC] = useState();
 [CProgressColor, setColorC] = useState();
 [CPeopleinString, setPeopleinStringC] = useState();
 [CopenDT , setOpenDTC] =useState ();
 [CDeals , setDealsC] = useState();
 [CURI , setCURI] = useState();
 // Bar-Frog 
 [FPersonCount , setPersonCountF] = useState();
 [FProgressB , setProgressBF] = useState();
 [FProgressColor, setColorF] = useState();
 [FPeopleinString, setPeopleinStringF] = useState();
 [FopenDT , setOpenDTF] =useState ();
 [FDeals , setDealsF] = useState();
 [FURI , setFURI] = useState();
  //Auto Changes when chnage to the amount of people is made
  useEffect(() => {
    //Belfort
    db.ref('/Bars/Belfort/People/').on('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setPersonCountB(snapshot.val());
    });
    db.ref('/Bars/Belfort/DaysOT/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setOpenDTB("\nFriday: "+snapshot.val()+"\n"+"Saturday: "+snapshot.val());
    });
    db.ref('/Bars/Belfort/Deals/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setDealsB(snapshot.val());
      
     
    });
    //Jacks
    db.ref('/Bars/Jacks/People/').on('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setPersonCountJ(snapshot.val());
    });
    db.ref('/Bars/Jacks/DaysOT/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setOpenDTJ("\nFriday: "+snapshot.val()+"\n"+"Saturday: "+snapshot.val());
    });
    db.ref('/Bars/Jacks/Deals/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setDealsJ(snapshot.val());
      
    });
    //Ceeps
    db.ref('/Bars/Ceeps/People/').on('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setPersonCountC(snapshot.val());
    });
    db.ref('/Bars/Ceeps/DaysOT/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setOpenDTC("\nFriday: "+snapshot.val()+"\n"+"Saturday: "+snapshot.val());
    });
    db.ref('/Bars/Ceeps/Deals/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setDealsC(snapshot.val());
    });
    //Frog
    db.ref('/Bars/Frog/People/').on('value', snapshot => {
      console.log('use ffect time: ', snapshot.val());
      setPersonCountF(snapshot.val());
    });
    db.ref('/Bars/Frog/DaysOT/').once('value', snapshot => {
      console.log('use effect time: ', snapshot.val());
      setOpenDTF ("\nFriday: "+snapshot.val()+"\n"+"Saturday: "+snapshot.val());
    });
    db.ref('/Bars/Frog/Deals/').once('value', snapshot => {
      console.log('use efect time: ', snapshot.val());
      setDealsF(snapshot.val());
      
     
    });
    //Realtime database functions
    setB();
    setJ();
    setC();
    setF();
    //URIS
    URIB();
    URIJ();
    URIC();
    URIF();
  }, );


  //Loading URI's
  function URIB(){
    var storageRef = storage.ref('belfort.png');
    storageRef.getDownloadURL().then(function(url){
      console.log(url)
      setBURI(url)
    })
  }
  function URIJ(){
    var storageRef = storage.ref('jacks.png');
    storageRef.getDownloadURL().then(function(url){
      console.log(url)
      setJURI(url)
    })
  }
  function URIC(){
    var storageRef = storage.ref('ceeps.png');
    storageRef.getDownloadURL().then(function(url){
      console.log(url)
      setCURI(url)
    })
  }
  function URIF(){
    var storageRef = storage.ref('frog.png');
    storageRef.getDownloadURL().then(function(url){
      console.log(url)
      setFURI(url)
    })
  }

  // loading times 
 function setB ( )
 {
   
    setPeopleinStringB ("People count :"+BPersonCount);

   if(BPersonCount >40 )
   {
    setProgressBB(1.0);
    setColorB("red");
   }
   if(BPersonCount >=36 && BPersonCount <40 )
   {
    setProgressBB(0.9);
    setColorB("red");
   }
   if(BPersonCount >=32 && BPersonCount <36 )
   {
    setProgressBB(0.8);
    setColorB("red");
   }
   if(BPersonCount >=28 && BPersonCount <32 ) 
   {
    setProgressBB (0.7);
    setColorB("yellow");
   }
   if(BPersonCount >=24 && BPersonCount <28 )
   {
    setProgressBB(0.6);
    setColorB("yellow");
   }
   if(BPersonCount >=20 && BPersonCount <24 )
   {
    setProgressBB(0.5);
    setColorB("yellow");
   }
   if(BPersonCount >=16 && BPersonCount <20 )
   {
    setProgressBB(0.4);
    setColorB("yellow");
   }
   if(BPersonCount >=12 && BPersonCount <16 )
   {
    setProgressBB(0.3);
    setColorB ("green");
   }
   if(BPersonCount >=8 && BPersonCount <12 )
   {
    setProgressBB(0.2);
    setColorB ("green");
   }
   if(BPersonCount >=4 && BPersonCount <8 )
   {
    setProgressBB(0.15);
    setColorB("green");
   } 
   if(BPersonCount >=1 && BPersonCount <4 )
   {
    setProgressBB(0.1);
    setColorB("green");
   }
   if(BPersonCount==0  )
   {
    setProgressBB(0.0);
    setColorB("green");
   }
  
 }
 function setJ ( )
 {
   
    setPeopleinStringJ("People count :"+JPersonCount);

   if(JPersonCount >40 )
   {
    setProgressBJ(1.0);
    setColorJ ("red");
   }
   if(JPersonCount >=36 && JPersonCount <40 )
   {
    setProgressBJ(0.9);
    setColorJ("red");
   }
   if(JPersonCount >=32 &&JPersonCount <36 )
   {
    setProgressBJ(0.8);
    setColorJ("red");
   }
   if(JPersonCount >=28 && JPersonCount <32 ) 
   {
    setProgressBJ (0.7);
    setColorJ("yellow");
   }
   if(JPersonCount >=24 && JPersonCount <28 )
   {
    setProgressBJ(0.6);
    setColorJ("yellow");
   }
   if(JPersonCount >=20 && JPersonCount <24 )
   {
    setProgressBJ(0.5);
    setColorJ("yellow");
   }
   if(JPersonCount >=16 && JPersonCount <20 )
   {
    setProgressBJ(0.4);
    setColorJ ("yellow");
   }
   if(JPersonCount >=12 && JPersonCount <16 )
   {
    setProgressBJ(0.3);
    setColorJ ("green");
   }
   if(JPersonCount>=8 && JPersonCount <12 )
   {
    setProgressBJ(0.2);
    setColorJ("green");
   }
   if(JPersonCount >=4 && JPersonCount <8 )
   {
    setProgressBJ(0.15);
    setColorJ("green");
   } 
   if(JPersonCount >=1 && JPersonCount <4 )
   {
    setProgressBJ(0.1);
    setColorJ("green");
   }
   if(JPersonCount==0  )
   {
    setProgressBJ(0.0);
    setColorJ("green");
   }
  
 }
 function setC ( )
 {
    
  setPeopleinStringC("People count :"+CPersonCount);

   if(CPersonCount >40 )
   {
    setProgressBC (1.0);
    setColorC ("red");
   }
   if(CPersonCount>=36 && CPersonCount<40 )
   {
    setProgressBC(0.9);
    setColorC("red");
   }
   if(CPersonCount >=32 && CPersonCount <36 )
   {
    setProgressBC(0.8);
    setColorC("red");
   }
   if(CPersonCount>=28 && CPersonCount <32 ) 
   {
    setProgressBC (0.7);
    setColorC("yellow");
   }
   if(CPersonCount >=24 && CPersonCount <28 )
   {
    setProgressBC(0.6);
    setColorC("yellow");
   }
   if(CPersonCount >=20 && CPersonCount<24 )
   {
    setProgressBC(0.5);
    setColorC("yellow");
   }
   if(CPersonCount >=16 && CPersonCount <20 )
   {
    setProgressBC(0.4);
    setColorC("yellow");
   }
   if(CPersonCount >=12 && CPersonCount <16 )
   {
    setProgressBC(0.3);
    setColorC ("green");
   }
   if(CPersonCount >=8 && CPersonCount<12 )
   {
    setProgressBC(0.2);
    setColorC ("green");
   }
   if(CPersonCount >=4 && CPersonCount <8 )
   {
    setProgressBC(0.15);
    setColorC("green");
   } 
   if(CPersonCount >=1 && CPersonCount <4 )
   {
    setProgressBC(0.1);
    setColorC("green");
   }
   if(CPersonCount==0  )
   {
    setProgressBC(0.0);
    setColorC("green");
   }
  
 }
 function setF ( )
 {
   
  setPeopleinStringF("People count :"+FPersonCount);

   if(FPersonCount >40 )
   {
    setProgressBF(1.0);
    setColorF("red");
   }
   if(FPersonCount >=36 && FPersonCount <40 )
   {
    setProgressBF(0.9);
    setColorF("red");
   }
   if(FPersonCount >=32 && FPersonCount <36 )
   {
    setProgressBF(0.8);
    setColorF("red");
   }
   if(FPersonCount >=28 && FPersonCount <32 ) 
   {
    setProgressBF(0.7);
    setColorF("yellow");
   }
   if(FPersonCount >=24 && FPersonCount <28 )
   {
    setProgressBF(0.6);
    setColorF("yellow");
   }
   if(FPersonCount >=20 && FPersonCount <24 )
   {
    setProgressBF(0.5);
    setColorF("yellow");
   }
   if(FPersonCount >=16 && FPersonCount <20 )
   {
    setProgressBF(0.4);
    setColorF ("yellow");
   }
   if(FPersonCount >=12 && FPersonCount <16 )
   {
    setProgressBF(0.3);
    setColorF("green");
   }
   if(FPersonCount >=8 && FPersonCount <12 )
   {
    setProgressBF(0.2);
    setColorF ("green");
   }
   if(FPersonCount >=4 && FPersonCount <8 )
   {
    setProgressBF(0.15);
    setColorF("green");
   } 
   if(FPersonCount >=1 && FPersonCount <4 )
   {
    setProgressBF(0.1);
    setColorF("green");
   }
   if(FPersonCount==0  )
   {
    setProgressBF(0.0);
    setColorF("green");
   }
  
 }
  
  
  
  
  function retrieveDataFromFirebase() {


    // read once from data store
    
    db.ref('/Bars/Belfort/People/').once('value').then(function (snapshot) {
      console.log("realtime:"+snapshot.val());
    });

    /*****************************/
    // LOAD DATA FROM FIRESTORE
    /*****************************/

    

    // firestore.collection("users").doc("bar").get()
    // .then(function (doc) {
    //     if (doc.exists) {
    //         console.log(doc.data().People +"Found !!!!");
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // })
    // .catch(function (error) {
    //     console.log("Error getting document:", error);
    // });

  }

    return (
        <View style={styles.screen}> 
        
      <View style={styles.container }>
     {/* Bar #1 */}
      <View style={styles.info }> 
      <CollapsibleView style={styles.bord }
       arrowStyling ={{rounded: true}}
              title={
                <View style={styles.infoV}>
                <View style={styles.info }> 
                <Text style={styles.infotxt } > {BPeopleinString}  </Text>
      <Progress.Bar progress={BProgressB} width={200} color = {BProgressColor}/>
        <Text style={styles.infotxt }>Belfort</Text>
        </View>
        <Image style={styles.avatar2} source={{uri: BURI}}/>
        </View>
              }
             
            >
              <View style={styles.infoV}>
              <Text>Hours open:{BopenDT} </Text>
              <Text>Deals for the Day:{"\n"+BDeals} </Text>
              </View>
            </CollapsibleView>
      </View>


      
      
      </View>
      <View style={styles.container }>
     {/* Bar #2 Jacks*/}
      <View style={styles.info }> 
      <CollapsibleView style={styles.bord }
              title={
                <View style={styles.infoV}>
                <View style={styles.info }> 
                <Text style={styles.infotxt } > {JPeopleinString}  </Text>
      <Progress.Bar progress={JProgressB} width={200} color = {JProgressColor}/>
        <Text style={styles.infotxt }>Jacks</Text>
        </View>
        <Image style={styles.avatar2} source={{uri: JURI}}/>
        </View>
              }
            >
              <View style={styles.infoV}>
              <Text>Hours open:{JopenDT} </Text>
              <Text>Deals for the Day:{"\n"+JDeals} </Text>
              </View>
            </CollapsibleView>
      </View>


      
      
      </View>
      <View style={styles.container }>
     {/* Bar #3 Ceeps*/}
      <View style={styles.info }> 
      <CollapsibleView
      style={styles.bord }
              title={
                <View style={styles.infoV}>
                <View style={styles.info }> 
                <Text style={styles.infotxt } > {CPeopleinString}  </Text>
      <Progress.Bar progress={CProgressB} width={200} color = {CProgressColor}/>
        <Text style={styles.infotxt }>Ceeps</Text>
        </View>
        <Image style={styles.avatar2} source={{uri: CURI}}/>
        </View>
              }
            >
              <View style={styles.infoV}>
              <Text>Hours open:{CopenDT} </Text>
              <Text>Deals for the Day:{"\n"+CDeals} </Text>
              </View>
            </CollapsibleView>
      </View>


      
      
      </View>
      <View style={styles.container }>
     {/* Bar #4 Frog*/}
      <View style={styles.info }> 
      <CollapsibleView
      style={styles.bord }
              title={
                <View style={styles.infoV}>
                <View style={styles.info }> 
                <Text style={styles.infotxt } > {FPeopleinString}  </Text>
      <Progress.Bar progress={FProgressB} width={200} color = {FProgressColor}/>
        <Text style={styles.infotxt }>Frog</Text>
        </View>
        <Image style={styles.avatar2} source={{uri: FURI}}/>
        </View>
              }
            >
              <View style={styles.infoV}>
              <Text>Hours open:{FopenDT} </Text>
              <Text>Deals for the Day:{"\n"+FDeals} </Text>
              </View>
            </CollapsibleView>
      </View>


      
      
      </View>
    
    
    
      </View>
    );
}
  const styles = StyleSheet.create({
      screen:{
          flex:1,
        backgroundColor: '#6a707c', 
      }
      ,
    container: {
      paddingTop: 50,
      flexDirection: "row",
      paddingLeft:10,
      borderColor:'#538a8f'
    },
    info: {
        flexDirection:"column",
        paddingLeft:10,
        paddingRight: 40
      },
      bord:{
        borderColor:'black',
        borderRadius:30
      },
      infoV: {
        flexDirection:"row",
        paddingLeft:10,
        paddingRight: 5
      },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    infotxt: {
        textAlign: "center"
      },
    logo: {
      width: 66,
      height: 58,
    },
    avatar2: {
      width: 45,
      height: 45,
      borderRadius: 63,
      borderWidth: 2,
      borderColor: "white",
     
     
    }
  });
    
  export default Bar;