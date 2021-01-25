import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import filters from './filters';
import products from './products';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  products,
  cart,
  form: reduxFormReducer,
});

export default rootReducer;
