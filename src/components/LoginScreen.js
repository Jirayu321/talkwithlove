import React from 'react';
import { 
  View, 
  Image,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button ,Input } from 'react-native-elements';

function LoginStackScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
           <View  style={styles.Box}>
             <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
              <View style={{justifyContent:"center"}}>
                <Text style={styles.logo}>เข้าสู่ระบบ</Text>
              </View>
            </View> 
            <View style={{padding:20}}>
              <Input
                placeholder='ชื่อผู้ใช้งาน'
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='#404040'
                  />
                }
              />
              <Input
                placeholder='รหัสผ่าน'
                leftIcon={
                  <Icon
                    name='lock'
                    size={24}
                    color='#404040'
                  />
                }
              />
            </View>
            <View style={{padding:20}}>
              <Button onPress={() =>  navigation.navigate("Home ")}
                  buttonStyle={{backgroundColor: "#ffffff"}}
                  title="เข้าสู่ระบบ" titleStyle={{ color: '#515151', fontSize:14,fontFamily:"Roboto" }}>
              </Button>
            </View>
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    container:{ 
            flex: 1,
            backgroundColor:"#FDEEF9",
          },
    Box:{
            
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
            flex:1,
            width:290,
            justifyContent: 'center',
            margin:40,
            top:-50
          },
    logo:{
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        fontSize:18,
        width:230,
        height:50,
        color:"#232323",
        padding:10,
        top:-15
        
      },
    ButtonPermission:{
      flex:0.5,
      alignItems: 'center', 
      justifyContent: 'center',
      top:-50,
      
      
    },
    InputText:{
        marginLeft:10,
        fontSize:16,
      },        
})
export default LoginStackScreen;