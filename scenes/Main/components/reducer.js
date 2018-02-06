export default function totalDeposited(state = 0, action) {
	switch(action.type) {
		case 'ADD_TO_SAVINGS_ACCOUNT_AMOUNT':
			return (state + action.value);
		case 'REMOVE_FROM_SAVINGS_ACCOUNT_AMOUNT':
			return (state - action.value);
		default:
			return state;
	}
};
