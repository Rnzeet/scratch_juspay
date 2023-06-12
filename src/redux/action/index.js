import {actionTypes} from '../action/actionTypes';

function moveCharacter(data) {
    return {
        type: actionTypes.MOVE_CHARACTER,
        payload: data
    }
}

export const rootActions ={
    moveCharacter
}