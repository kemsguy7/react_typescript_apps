import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState);
code;

// Example code snippet of a reducer.
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            return { ...state, state.total + action.amount };
            case ... 
            default: 
            return state;
    }
}
