import { gameDataObject } from './gameData';
import { getIndexByGamecode } from './getIndexByGameCode';


export function updateRegionPoints(data: any) {
    gameDataObject[getIndexByGamecode(data.gameCode)].regions.map((region: {id: number, points_red: number, points_blue: number, points_yellow: number, points_green: number, controlledBy: string}) => {
      if (region.id === data.regionId) {
        if (data.team === "Red") {region.points_red += 1}
        if (data.team === "Blue") {region.points_blue += 1}
        if (data.team === "Yellow") {region.points_yellow += 1}
        if (data.team === "Green") {region.points_green += 1}
        console.log("region where to add points", region);
        region.controlledBy = updateRegionControlledBy(region)
        console.log("region where to add points", region);
      }
      console.log("updateRegionPoints");
    });
  }



  function updateRegionControlledBy(controlledBy: {points_red: number, points_blue: number, points_yellow: number, points_green: number}): string {
    let highestKey = "Red";
    let highestValue = controlledBy.points_red;
  
    if (controlledBy.points_blue > highestValue) {
      highestKey = "Blue";
      highestValue = controlledBy.points_blue;
    }
    if (controlledBy.points_yellow > highestValue) {
      highestKey = "Yellow";
      highestValue = controlledBy.points_yellow;
    }
    if (controlledBy.points_green > highestValue) {
      highestKey = "Green";
      highestValue = controlledBy.points_green;
    }
  
    return highestKey;
  }
  


  interface CalVictoryPoints {
    red: number 
    blue: number
    yellow: number
    green: number
  }

  
  export function calculateVictoryPoints(gameCode:string): CalVictoryPoints {
    let accumulatedPoints = {red: 0, blue: 0, yellow: 0, green: 0}

    gameDataObject[getIndexByGamecode(gameCode)].regions.map((region) => {
      if (region.controlledBy === "red") {accumulatedPoints.red += 1}
      if (region.controlledBy === "blue") {accumulatedPoints.blue += 1}
      if (region.controlledBy === "yellow") {accumulatedPoints.yellow += 1}
      if (region.controlledBy === "green") {accumulatedPoints.green += 1}
    })

    return accumulatedPoints
  }