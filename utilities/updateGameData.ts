import { gameDataObject } from './gameData';
import { getIndexByGamecode } from './getIndexByGameCode';


export function updateRegionPoints(data: any) {
    gameDataObject[getIndexByGamecode(data.gameCode)].regions.map((region: {id: number, points_red: number, points_blue: number, points_yellow: number, points_green: number}) => {
      if (region.id === data.regionId) {
        if (data.team === "Red") {region.points_red += 1}
        if (data.team === "Blue") {region.points_blue += 1}
        if (data.team === "Yellow") {region.points_yellow += 1}
        if (data.team === "Green") {region.points_green += 1}
        console.log("region where to add points", region);
      }
    });
  }
