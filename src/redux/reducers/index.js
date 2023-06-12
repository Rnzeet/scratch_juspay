import { combineReducers } from 'redux';

import { actionTypes } from '../action/actionTypes';

const initialState = {
    character: {
        position: 0
    }
};

function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.MOVE_CHARACTER:
            return {
                ...state,
                character: {
                    ...state.character,
                    position: action.payload
                }
            }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    data: reducers
})
export default rootReducer;