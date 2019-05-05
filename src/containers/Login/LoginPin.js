import React, {Component} from 'react';
import { connect } from 'react-redux'
import {ActivityIndicator, Alert, StyleSheet, TextInput, View, Button, Text} from 'react-native';
import { ACCOUNT_SAVE_DATA} from '../../reducers/actionTypes'

import axios from 'axios';

import { Actions,ActionConst } from 'react-native-router-flux';

class LoginPin extends Component {
  state = { 
    loading:false,
    Pin:''
  };
  onPressConfirm=()=>{
    if(this.state.Pin == this.props.login.pin){
      this.props.accountSaveData(this.props.login.email,this.props.login.amount)
      var self = this;
      this.setState({loading:true})
      axios.post('http://localhost:3000/loginSuccess', {
      email: self.props.login.email
    })
    .then(function (response) {
      if(response.data.res_code == '103'){
        Alert.alert(
          response.data.res_desc
       )
      }
      else if (response.data.res_code == '0000'){
        Actions["account"]({type: ActionConst.RESET});
      }
    })
    .catch(function (error) {
      Alert.alert(
        error
      )
    });
      
    }
    else{
      Alert.alert(
        "incorrect Pin"
      )
      this.setState({Pin:''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter Pin</Text>
         <TextInput
          placeholder="Pin"
          secureTextEntry={true}
          keyboardType="number-pad"
          autoFocus={true}
          onChangeText={(text) => this.setState({Pin:text})}
          value={this.state.Pin}
				/>
        {this.state.loading ? <ActivityIndicator size="large" color="#0000ff" />:<Button title="Confirm" onPress={() => this.onPressConfirm()}/>}
        
        
      </View>
    );
  }
}
const mapStateToProps=(state)=> {
  return {
    login: state.login
  }
}

const mapDispachToProps = dispatch => {
  return {
    accountSaveData:(email,amount)=>dispatch({ type:ACCOUNT_SAVE_DATA,email:email,amount:amount})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(LoginPin);

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
