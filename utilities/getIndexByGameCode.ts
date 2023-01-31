import { gameDataObject } from './gameData';

export const getIndexByGamecode = (gameCode: string): number => {
    const index = gameDataObject.findIndex((object) => {
      return object.gameCode === gameCode;
    });
  
    return index;
  }