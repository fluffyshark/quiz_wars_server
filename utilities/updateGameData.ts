import { gameDataObject } from './gameData';
import { getIndexByGamecode } from './getIndexByGameCode';


export function updateRegionPoints(data: any) {
    gameDataObject[getIndexByGamecode(data.gameCode)].regions.map((region: {id: number, points_red: number, points_blue: number, points_yellow: number, points_green: number}) => {
      if (region.id === data.regionId) {
        if (data.team=== "red") {region.points_red += 1}
        console.log("region where to add points", region);
      }
    });
  }


  