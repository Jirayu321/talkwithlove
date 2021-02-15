import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image } from "react-native";

export default  Question = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        <View style={styles.Box}>
                    <View><Image source={require('../assets/logo.png')} style={styles.ImageLogo}/></View>
                    <View style={{justifyContent:"center"}}>
                    <Text style={styles.logo}>ตอบคำถามต่อไปนี้</Text>
                    </View>
        </View> 
        
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
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
  logo:{
          backgroundColor:"#FFFFFF",
          borderRadius:20,
          fontSize:18,
          width:210,
          height:50,
          color:"#232323",
          padding:10,
          top:-15
        }
});