import { combineReducers } from 'redux';

import {
  totalSavingsAmount,
  savingsAccountInfo,
} from './scenes/Main/components/reducer';


export default combineReducers({
  totalSavingsAmount,
  savingsAccountInfo,
});
