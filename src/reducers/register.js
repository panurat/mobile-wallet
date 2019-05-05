import {
    REGISTER_SAVE_EMAIL
  } from './actionTypes'

  export function register(state = {email:'',pin:''}, action) {
    switch (action.type) {
      case REGISTER_SAVE_EMAIL:
        return {...state,email:action.email}
      default:
        return state
    }
  }