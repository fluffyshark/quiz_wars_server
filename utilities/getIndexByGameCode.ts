import { gameDataObject } from './gameData';

export const getIndexByGamecode = (gameCode: number): number => {
    const index = gameDataObject.findIndex((object) => {
      return object.gameCode === gameCode;
    });
  
    return index;
  }