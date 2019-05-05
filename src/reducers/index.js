import { combineReducers } from 'redux'
import { register} from './register'
import { login} from './login'
import { account} from './account'

const rootReducer = combineReducers({
  account,
  login,
  register
})

export default rootReducer