import R from 'ramda';
import { AsyncStorage } from 'react-native';

const APP_STORAGE = '@APP:KEY';

const generatorWeekList = () => {
  const weeks = R.range(1, 53);
  const mininalDeposit = 5;

  return weeks.map((week, i) => {
    const index = i + 1;
    const value = index * mininalDeposit;
    return {
      isDeposited: false,
      value,
      index,
    };
  });
};

const weeks = generatorWeekList();
const savingsAccountInfo = weeks.reduce((acc, val) => acc + val.value, 0);

const initialState = {
  totalSavingsAmount: 0,
  savingsPercentage: 0,
  savingsAccountInfo,
  weeks,
};

const calculateSavingsPercentage = (totalSavingsAmount, savingsAccountInfo) => ((totalSavingsAmount * 100) / savingsAccountInfo).toFixed(1);

const actions = () => ({
  clear: async () => AsyncStorage.removeItem(APP_STORAGE),
  addToSavingsAccount: async (state, value) => {
    let { totalSavingsAmount, savingsAccountInfo } = state;
    totalSavingsAmount += value;

    const savingsPercentage = calculateSavingsPercentage(totalSavingsAmount, savingsAccountInfo);
    const newState = { ...state, totalSavingsAmount, savingsPercentage };
    await AsyncStorage.setItem(APP_STORAGE, JSON.stringify(newState));

    return newState;
  },
  removeFromSavingsAccount: async (state, value) => {
    let { totalSavingsAmount, savingsAccountInfo } = state;
    totalSavingsAmount -= value;

    const savingsPercentage = calculateSavingsPercentage(totalSavingsAmount, savingsAccountInfo);
    const newState = { ...state, totalSavingsAmount, savingsPercentage };
    await AsyncStorage.setItem(APP_STORAGE, JSON.stringify(newState));

    return newState;
  },
});

const props = ['savingsAccountInfo', 'totalSavingsAmount', 'savingsPercentage', 'weeks'];

export { initialState, props, actions };
