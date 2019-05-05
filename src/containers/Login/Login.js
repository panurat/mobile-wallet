import React, {Component} from 'react';
import { connect } from 'react-redux'
import {ActivityIndicator, Alert, StyleSheet, TextInput, View, Button, Text} from 'react-native';
import { LOGIN_SAVE_DATA} from '../../reducers/actionTypes'
import { Actions,ActionConstShort } from 'react-native-router-flux';

import axios from 'axios';


class Login extends Component {
  state = { 
    email:'',
    loading:false 
  };

  onPressLogin=()=>{
    var self = this;
    this.setState({loading:true})
    axios.post('http://localhost:3000/login', {
      email: this.state.email
    })
    .then(function (response) {
      if(response.data.res_code == '101'){
        Alert.alert(
          response.data.res_desc
       )
      }
      else if (response.data.res_code == '0000'){
        self.props.loginSaveData(response.data.email,response.data.pin,response.data.amount)
        Actions["loginPin"]();
      }
      self.setState({loading:false})
    })
    .catch(function (error) {
      Alert.alert(
        "Can't connect server"
      )
      self.setState({loading:false})
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter email for login</Text>
        <TextInput
         placeholder="Email"
         keyboardType="email-address"
         autoCapitalize = 'none'
         autoFocus={true}
         onChangeText={(text) => this.setState({email:text})}
				/>
         {this.state.loading ? <ActivityIndicator size="large" color="#0000ff" />:<Button title="Login" onPress={() => this.onPressLogin()}/>}
        
      </View>
    );
  }
}

const mapStateToProps=(state)=> {
  return {
    register: state.register
  }
}
const mapDispachToProps = dispatch => {
  return {
    loginSaveData:(email,pin,amount)=>dispatch({ type:LOGIN_SAVE_DATA,email:email,pin:pin,amount:amount})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // justifyContent: 'center',
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
