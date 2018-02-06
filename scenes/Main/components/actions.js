export function addDeposit(value) {
	return {
		type: 'NEW_DEPOIST',
		value,
	}
}