import {
    LOGIN_SAVE_DATA
  } from './actionTypes'
 
  export function login(state = {email:'',pin:'',amount:''}, action) {
    switch (action.type) {
      case LOGIN_SAVE_DATA:
        return {...state,email:action.email,pin:action.pin,amount:action.amount}
      default:
        return state
    }
  }