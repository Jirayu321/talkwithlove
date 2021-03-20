import React from 'react';
import { 
  View, 
  Image,
  StyleSheet,
  Text
} from 'react-native';
import { Button ,Input} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


function RegisterStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Box}>
            <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
            <View style={{justifyContent:"center"}}>
              <Text style={styles.logo}>สร้างบัญชี</Text>
            </View>
        </View> 
        <View style={{padding:20}}>
          <Input
            placeholder='ชื่อผู้ใช้งาน'
            leftIcon={<Icon name='user' size={24} color='#404040'/> }
            />
            <Input
            placeholder='อีเมล์'
            leftIcon={<Icon name='envelope' size={24} color='#404040'/> }
            />
            <Input
            placeholder='รหัสผ่าน'
            leftIcon={<Icon name='lock' size={30} color='#404040'/> }
            />
            <Input
            placeholder='ยืนยันรหัสผ่าน'
            leftIcon={<Icon name='lock' size={30} color='#404040'/> }
            />
            <Input
            placeholder='วันเกิด'
            leftIcon={<Icon name='calendar' size={24} color='#404040'/> }
            />
        </View>
          <View style={{padding:20}}>
              <Button onPress={() =>  navigation.navigate("Question ")}
                  buttonStyle={{backgroundColor: "#ffffff"}}
                  title="ต่อไป" titleStyle={{ color: '#515151', fontSize:14,fontFamily:"Roboto" }}>
              </Button>
            </View>
        </ScrollView>
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
      borderRadius:10,
      fontSize:18,
      width:210,
      height:50,
      color:"#232323",
      padding:10,
      top:-15
    },
    InputText:{
      marginLeft:10,
      fontSize:16
    }
    
})
export default RegisterStackScreen;