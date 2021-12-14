import { NameSpace } from 'store/root-reducer';

export const getCurrentGenre = (state) => state[NameSpace.App].currentGenre;
export const getCurrentScreen = (state) => state[NameSpace.App].currentScreen;
