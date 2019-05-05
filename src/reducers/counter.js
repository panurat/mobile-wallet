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
    MOVIE_SEARCHING_SUCCESS
  } from './actionTypes'

  
  import {Actions} from 'react-native-router-flux';
  
  export function countdown(state = 0, action) {
    switch (action.type) {
      case INCREMENT_ASYNC:
        return action.value
      case COUNTDOWN_TERMINATED:
      case CANCEL_INCREMENT_ASYNC:
        return 0
    case COUNTDOWN_FINISH:
    Actions.search();
        return 0
      default:
        return state
    }
  }
  
  export function counter(state = 0, action) {
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      case INCREMENT_IF_ODD:
        return state % 2 ? state + 1 : state
      default:
        return state
    }
  }


  export function movie(state = {loading:false,movie:''}, action) {
    switch (action.type) {
      case MOVIE_FETCH:
        return {...state,loading:true}
      case MOVIE_FETCH_SUCCESS:
        return {...state,loading:false,movie:action.data}
      default:
        return state
    }
  }

  export function movieDetail(state = {loading:false,detail:''}, action) {
    switch (action.type) {
      case MOVIE_DETAIL_FETCH:
        return {...state,loading:true}
      case MOVIE_DETAIL_FETCH_SUCCESS:
        return {...state,loading:false,detail:action.data}
      default:
        return state
    }
  }

  export function movieSearch(state = {loading:false,movie:''}, action) {
    switch (action.type) {
      case MOVIE_SEARCHING_START:
        return {...state,loading:true}
      case MOVIE_SEARCHING_SUCCESS:
        return {...state,loading:false,movie:action.movie}
      default:
        return state
    }
  }