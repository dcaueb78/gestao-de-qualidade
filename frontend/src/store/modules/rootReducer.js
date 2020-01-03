import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import nonConformity from './nonConformity/reducer';

export default combineReducers({
  auth,
  user,
  nonConformity
});
