import { combineReducers } from 'redux'
import { movie,movieDetail,movieSearch} from './counter'
import { register} from './register'
import { login} from './login'
import { account} from './account'

const rootReducer = combineReducers({
  account,
  login,
  register,
  movie,
  movieDetail,
  movieSearch
})

export default rootReducer