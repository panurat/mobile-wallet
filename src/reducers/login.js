import {
    MOVIE_FETCH_SUCCESS,
    LOGIN_SAVE_DATA
  } from './actionTypes'

  
  import {Actions} from 'react-native-router-flux';
  
 
  export function login(state = {email:'',pin:'',amount:''}, action) {
    switch (action.type) {
      case LOGIN_SAVE_DATA:
        return {...state,email:action.email,pin:action.pin,amount:action.amount}
      case MOVIE_FETCH_SUCCESS:
        return {...state,loading:false,movie:action.data}
      default:
        return state
    }
  }