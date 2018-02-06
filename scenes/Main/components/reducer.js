export default function totalDeposited(state = 0, action) {
	switch(action.type) {
		case 'NEW_DEPOIST':
			return (state + action.value);
		default:
			return state;
	}
};
