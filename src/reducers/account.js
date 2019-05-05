import {
    ACCOUNT_SAVE_DATA
  } from './actionTypes'
  
  export function account(state = {email:'',amount:''}, action) {
    switch (action.type) {
      case ACCOUNT_SAVE_DATA:
        return {...state,email:action.email,amount:action.amount}
      default:
        return state
    }
  }