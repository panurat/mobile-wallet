import React, {Component} from 'react';
import  {StyleSheet, Text, View, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';


export class Home extends Component {
  state = {
    progress: 0,
    indeterminate: true,
  };

  onPressLogin=()=>{
    Actions["login"]();
  }
  onPressRegister=()=>{
    Actions.register();
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Login" onPress={() => this.onPressLogin()}/>
        <Button title="Register" onPress={() => this.onPressRegister()}/>
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
