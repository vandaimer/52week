const initialState = {
  totalSavingsAmount: 0,
  savingsAccountInfo: 0,
  savingsPercentage: 0,
};

const calculateSavingsPercentage = (totalSavingsAmount, savingsAccountInfo) => ((totalSavingsAmount * 100) / savingsAccountInfo).toFixed(1);

const actions = () => ({
  maxSavingsAccoutAmount: (state, value) => ({ ...state, savingsAccountInfo: value }),
  addToSavingsAccount: (state, value) => {
    let { totalSavingsAmount, savingsAccountInfo } = state;
    totalSavingsAmount += value;

    const savingsPercentage = calculateSavingsPercentage(totalSavingsAmount, savingsAccountInfo);
    return { totalSavingsAmount, savingsPercentage };
  },
  removeFromSavingsAccount: (state, value) => {
    let { totalSavingsAmount, savingsAccountInfo } = state;
    totalSavingsAmount -= value;

    const savingsPercentage = calculateSavingsPercentage(totalSavingsAmount, savingsAccountInfo);
    return { totalSavingsAmount, savingsPercentage };
  },
});

const props = ['savingsAccountInfo', 'totalSavingsAmount', 'savingsPercentage'];

export { initialState, props, actions };
