import React, {Component} from 'react';
import { connect } from 'react-redux'
import {ActivityIndicator,Alert, StyleSheet, TextInput, View, Button,Text} from 'react-native';

import axios from 'axios';

import { Actions,ActionConst } from 'react-native-router-flux';

class Pin extends Component {
  state = { 
    email:this.props.register.email,
    Pin:'' ,
    loading:false
  };
  onPressConfirm=()=>{
    if(this.state.Pin.length == 6){ 
      var self = this;
      this.setState({loading:true})
      axios.post('http://localhost:3000/register', {
        email: self.state.email,
        pin: self.state.Pin
      })
      .then(function (response) {
        if(response.data.res_code == '102'){
          Alert.alert(
            response.data.res_desc
          )
        }
        else if (response.data.res_code == '0000'){
          //self.props.saveEmail(self.state.email)
          Actions["registerSuccess"]({type: ActionConst.RESET});
        }
        self.setState({loading:false})
      })
      .catch(function (error) {
        Alert.alert(
          error
        )
      });
    }
    else{
      Alert.alert(
        "Please only 6 Pin number"
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter Pin 6 digits</Text>
        <TextInput
        placeholder="Pin"
        secureTextEntry={true}
        keyboardType="number-pad"
        autoFocus={true}
        onChangeText={(text) => this.setState({Pin:text})}
				/>
         {this.state.loading ? <ActivityIndicator size="large" color="#0000ff" />:<Button title="Confirm" onPress={() => this.onPressConfirm()}/>}
        
      </View>
    );
  }
}
const mapStateToProps=(state)=> {
  return {
    register: state.register
  }
}

export default connect(mapStateToProps)(Pin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
