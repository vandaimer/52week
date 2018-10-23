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
const updateStorage = async newState => {
  const storage = await AsyncStorage.getItem(APP_STORAGE);
  if (storage) {
    await AsyncStorage.setItem(APP_STORAGE, JSON.stringify({ ...storage, ...newState }));
  }
  await AsyncStorage.setItem(APP_STORAGE, JSON.stringify(newState));
};

const loadFromStorage = async state => {
  const storage = await AsyncStorage.getItem(APP_STORAGE);
  if (!storage) return state;
  return JSON.parse(storage);
};

const actions = () => ({
  clear: async () => AsyncStorage.removeItem(APP_STORAGE),
  changeWeekItem: async (state, value, weekIndex) => {
    const { weeks, totalSavingsAmount, savingsAccountInfo } = state;
    const week = weeks[weekIndex - 1];
    const isDeposited = !week.isDeposited;
    const newValue = totalSavingsAmount + (isDeposited ? value : value * -1);
    const savingsPercentage = calculateSavingsPercentage(newValue, savingsAccountInfo);

    week.isDeposited = isDeposited;
    weeks[weekIndex - 1] = week;

    const newState = { weeks, totalSavingsAmount: newValue, savingsPercentage };
    await updateStorage(newState);

    return newState;
  },
  loadFromStorage: async state => loadFromStorage(state),
});

const props = ['savingsAccountInfo', 'totalSavingsAmount', 'savingsPercentage', 'weeks'];

export { initialState, props, actions };
