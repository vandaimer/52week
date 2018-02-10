export function addToSavingsAccount(value) {
	return {
		type: 'ADD_TO_SAVINGS_ACCOUNT_AMOUNT',
		value,
	}
}

export function removeFromSavingsAccount(value) {
	return {
		type: 'REMOVE_FROM_SAVINGS_ACCOUNT_AMOUNT',
		value,
	}
}

export function maxSavingsAccoutAmount(value) {
	return {
		type: 'MAX_SAVINGS_ACCOUNT_AMOUNT',
		value,
	}
}
