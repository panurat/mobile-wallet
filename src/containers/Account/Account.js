import React, {Component} from 'react';
import { connect } from 'react-redux'
import  {StyleSheet, Text, View, Button} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { REGISTER_SAVE_EMAIL } from '../../reducers/actionTypes';



export class Account extends Component {

  onPressRegister=()=>{
    Actions.register();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Email: {this.props.account.email}</Text>
        <Text>Amount: {this.props.account.amount}</Text>      
      </View>
    );
  }
}

const mapStateToProps=(state)=> {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(Account);

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
