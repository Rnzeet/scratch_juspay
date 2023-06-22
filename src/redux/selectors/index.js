import { createSelector } from "reselect";

export const getCharacter = (state) => state?.data && state?.data?.character;

const getCharacterPosition = createSelector(getCharacter, (data) => data?.position)

export const rootSelectors = {
    getCharacterPosition
}