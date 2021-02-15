import React from 'react';
import { 
  View, 
  Image,
  StyleSheet,
  Text
} from 'react-native';
import { Button ,Input} from 'react-native-elements';


function RegisterStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.Box}>
            <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
            <View style={{justifyContent:"center"}}>
              <Text style={styles.logo}>สร้างบัญชี</Text>
            </View>
        </View> 
        <View style={{flex:1, marginTop:50, height:200}}>
          <View style={styles.BoxInput}>
            <View style={{marginBottom:-20}}>
              <Input placeholder='ชื่อผู้ใช้งาน' leftIcon={{ type: 'font-awesome', name: 'user',size:30}} inputStyle={styles.InputText}/>
            </View>
            <View style={{marginBottom:-20}}>
              <Input placeholder='อีเมล์' leftIcon={{ type: 'font-awesome', name: 'envelope',size:20 }} inputStyle={styles.InputText}/>
            </View>
            <View style={{marginBottom:-20}}>
              <Input placeholder='รหัสผ่าน' leftIcon={{ type: 'font-awesome', name: 'lock' ,size:30}} inputStyle={styles.InputText}/>
            </View>
            <View style={{marginBottom:-20}}>
               <Input placeholder='ยืนยันรหัสผ่าน' leftIcon={{ type: 'font-awesome', name: 'lock',size:30 }} inputStyle={styles.InputText}/>
            </View>
            <View style={{marginBottom:-20}}>
                <Input placeholder='วันเกิด' leftIcon={{ type: 'font-awesome', name: 'calendar',size:20}} inputStyle={styles.InputText}/>
            </View>
            <View style={styles.ButtonNext}>
              <Button onPress={() =>  navigation.navigate("Question ")}
                  buttonStyle={{backgroundColor: "#ffffff",width:200 }}
                  title="ต่อไป" titleStyle={{ color: '#515151', fontSize:12,fontFamily:"Roboto" }}
                  
              ></Button>
            </View>
          </View>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
            flex: 1,
            backgroundColor:"#FDEEF9"  
          },
    Box:{
            margin:20,
            flexDirection: "row",
            alignItems: 'flex-end', 
            justifyContent: 'flex-start',
          },    
    ImageLogo:{
      margin:10,
      width:85,
      height:70
    },
    BoxInput:{
      
      width:290,
      justifyContent: 'center',
      margin:40,
      top:-50
    },
    logo:{
      backgroundColor:"#FFFFFF",
      borderRadius:20,
      fontSize:18,
      width:210,
      height:50,
      color:"#232323",
      padding:10,
      top:-15
      
    },
    ButtonNext:{
      marginTop:30,
      alignItems: 'flex-end', 
      justifyContent: 'flex-start',
      width:280
    },
    InputText:{
      marginLeft:10,
      fontSize:16
    }
    
})
export default RegisterStackScreen;