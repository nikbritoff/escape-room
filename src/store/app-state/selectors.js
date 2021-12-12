import { NameSpace } from 'store/root-reducer';

export const getCurrentGenre = (state) => state[NameSpace.App].currentGenre;
