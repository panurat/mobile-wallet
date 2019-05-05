import {
    INCREMENT,
    DECREMENT,
    INCREMENT_IF_ODD,
    INCREMENT_ASYNC,
    CANCEL_INCREMENT_ASYNC,
    COUNTDOWN_TERMINATED,
    COUNTDOWN_FINISH,
    MOVIE_FETCH,
    MOVIE_FETCH_SUCCESS,
    MOVIE_DETAIL_FETCH,
    MOVIE_DETAIL_FETCH_SUCCESS,
    MOVIE_SEARCHING_START,
    MOVIE_SEARCHING_SUCCESS,
    REGISTER_SAVE_EMAIL
  } from './actionTypes'

  
  import {Actions} from 'react-native-router-flux';
  
 
  export function register(state = {email:'',pin:''}, action) {
    switch (action.type) {
      case REGISTER_SAVE_EMAIL:
        return {...state,email:action.email}
      case MOVIE_FETCH_SUCCESS:
        return {...state,loading:false,movie:action.data}
      default:
        return state
    }
  }