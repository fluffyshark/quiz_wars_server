export interface GameData {
    users: {
        userName: string,
        points: number,
        gameCode: number,
        team: string
    }[],
    gameCode: number,
    gameStatus: string,
    regions: {
        id: number,
        points_red: number,
        points_blue: number,
        points_yellow: number,
        points_green: number,
        your_points: number,
        controlledBy: string
    }[]
}

  
  
// Declare array that will hold all game data
export let gameDataObject: GameData[] = [{
    gameCode: 123456789,
    gameStatus: '',
    users: [],
    regions: [
        {id: 38, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
        {id: 200, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
        {id: 300, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"}
    ]
}]


