import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native';


import { Actions, ActionConst } from 'react-native-router-flux';

export class RegisterSuccess extends Component {
  state = { 
    email:'' 
  };
  onPressHome=()=>{
    Actions["home"]({type: ActionConst.RESET});
  }
  render() {
   
    return (
      <View style={styles.container}>
        <Text>Register Success</Text>
        <Button title="Home" onPress={() => this.onPressHome()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
