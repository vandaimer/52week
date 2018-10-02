export function totalSavingsAmount(state = 0, action) {
  switch (action.type) {
    case 'ADD_TO_SAVINGS_ACCOUNT_AMOUNT':
      return state + action.value;
    case 'REMOVE_FROM_SAVINGS_ACCOUNT_AMOUNT':
      return state - action.value;
    default:
      return state;
  }
}

export function savingsAccountInfo(state = 0, action) {
  switch (action.type) {
    case 'MAX_SAVINGS_ACCOUNT_AMOUNT':
      return action.value;
    default:
      return state;
  }
}
