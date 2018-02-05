export default function totalDeposited(state = 0, action) {
	switch(action.type) {
		case 'NEW_DEPOIST':
			console.log('NEW DEPOSIT', (state + action.value));
			return (state + action.value);
		default:
			console.log('DEFAULT STATE');
			return state;
	}
};
