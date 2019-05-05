import React, {Component} from 'react';
import { connect } from 'react-redux'
import {ActivityIndicator, Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native';

import { REGISTER_SAVE_EMAIL} from '../../reducers/actionTypes'
import { Actions,ActionConstShort } from 'react-native-router-flux';

import axios from 'axios';

class Register extends Component {
  state = { 
    loading:false,
    email:'' 
  };


  onPressRegister=()=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    this.setState({loading:true})
    if(reg.test(this.state.email) === false){
        Alert.alert(
          "Email is Not Correct"
        )
        this.setState({loading:false})
    }
    else{
      var self = this;
      axios.post('http://localhost:3000/check', {
        email: self.state.email
      })
      .then(function (response) {
        if(response.data.res_code == '102'){
          Alert.alert(
            response.data.res_desc
         )
         self.setState({loading:false})
        }
        else if (response.data.res_code == '0000'){
          self.props.saveEmail(self.state.email)
          Actions["pin"]();
        }
      })
      .catch(function (error) {
        Alert.alert(
          "Can't connect server"
        )
      });
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter Email</Text>
        <TextInput
         placeholder="Email"
         keyboardType="email-address"
         autoCapitalize = 'none'
         autoFocus={true}
         onChangeText={(text) => this.setState({email:text})}
				/>
        {this.state.loading ? <ActivityIndicator size="large" color="#0000ff" />:<Button title="Register" onPress={() => this.onPressRegister()}/>}
        
      </View>
    );
  }
}



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

const mapStateToProps=(state)=> {
  return {
    register: state.register
  }
}
const mapDispachToProps = dispatch => {
  return {
    saveEmail:(email)=>dispatch({ type:REGISTER_SAVE_EMAIL,email:email})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(Register);
