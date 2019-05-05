import {
    REGISTER_SAVE_EMAIL
  } from './actionTypes'

  
  import {Actions} from 'react-native-router-flux';
  
 
  export function register(state = {email:'',pin:''}, action) {
    switch (action.type) {
      case REGISTER_SAVE_EMAIL:
        return {...state,email:action.email}
      default:
        return state
    }
  }