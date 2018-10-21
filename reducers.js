import { AsyncStorage } from 'react-native';

const APP_STORAGE = '@APP:KEY';

const initialState = {
  totalSavingsAmount: 0,
  savingsAccountInfo: 0,
  savingsPercentage: 0,
};

const calculateSavingsPercentage = (totalSavingsAmount, savingsAccountInfo) => ((totalSavingsAmount * 100) / savingsAccountInfo).toFixed(1);

const actions = () => ({
  maxSavingsAccoutAmount: async (state, value) => {
    const storage = await AsyncStorage.getItem(APP_STORAGE);
    if (storage) return JSON.parse(storage);

    const newState = { ...state, savingsAccountInfo: value };
    await AsyncStorage.setItem(APP_STORAGE, JSON.stringify(newState));

    return newState;
  },
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

const props = ['savingsAccountInfo', 'totalSavingsAmount', 'savingsPercentage'];

export { initialState, props, actions };
