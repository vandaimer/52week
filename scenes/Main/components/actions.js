export function addToSavingsAccount (value) {
  return {
    type: 'ASYNC_ADD_TO_SAVINGS_ACCOUNT_AMOUNT',
    value,
  };
}

export function removeFromSavingsAccount (value) {
  return {
    type: 'ASYNC_REMOVE_FROM_SAVINGS_ACCOUNT_AMOUNT',
    value,
  };
}

export function maxSavingsAccoutAmount (value) {
  return {
    type: 'MAX_SAVINGS_ACCOUNT_AMOUNT',
    value,
  };
}
