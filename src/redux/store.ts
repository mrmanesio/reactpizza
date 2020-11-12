import { createStore } from 'redux';
import rootReducer from './redusers/index'

const store = createStore(rootReducer);

export default store;