
/**
 * @author Pierre Segonne
 * Date: 17/04/2018
 */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import formReducer from '../store/form/reducer';


function configureStore(initialState) {
  const reducers = combineReducers({
    form: formReducer
  });
  
  return createStore(
    reducers,
    initialState,
    // REDUX DEV TOOLS + THUNK EXTENSION ENABLER.
    composeWithDevTools(applyMiddleware(...[thunkMiddleware])),
  );
}

export default configureStore;
