export interface GameData {
    users: {
        userId: string
        username: string,
        points: number,
        gameCode: string,
        team: string
    }[],
    gameCode: string,
    gameStatus: string,
    gameType: string,
    hostId:string,
    victoryPoints: {red_team:number, blue_team:number, yellow_team:number, green_team:number},
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
    gameCode: "123456789",
    gameStatus: '',
    gameType: '',
    hostId: "",
    users: [],
    victoryPoints: {red_team:0, blue_team:0, yellow_team:0, green_team:0},
    regions: [{id: 0, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"}]
}]



// Initiating new game by creating new game object in gameDataObject
export function newGameData(hostId:string, gameCode:string, gameType:string) {
    gameDataObject.push({
        gameCode,
        gameStatus: 'ONBOARDING_PLAYERS',
        gameType,
        users: [],
        hostId,
        victoryPoints: {red_team:0, blue_team:0, yellow_team:0, green_team:0},
        regions: regionData
    })
}



// RegionsData are to be pushed into gameDataObject for every new game
let regionData = [
    {id: 0, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "Green"},
    {id: 1, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 2, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 3, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 4, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 5, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 6, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 7, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 8, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 9, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 10, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},

    {id: 11, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 12, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 13, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 14, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 15, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 16, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 17, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 18, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 19, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 20, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},

    {id: 21, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 22, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 23, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 24, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 25, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 26, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 27, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 28, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 29, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 30, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},

    {id: 31, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 32, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 33, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 34, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 35, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 36, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 37, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 38, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "Red"},
    {id: 39, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 40, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},

    {id: 41, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 42, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 43, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 44, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 45, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 46, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 47, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 48, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 49, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 50, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},

    {id: 51, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 52, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 53, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "Yellow"},
    {id: 54, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 55, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 56, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 57, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 58, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 59, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 60, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},

    {id: 61, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 62, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 63, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 64, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 65, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 66, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
    {id: 67, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "Blue"},
    {id: 68, points_red: 0, points_blue: 0, points_yellow: 0, points_green: 0, your_points: 0, controlledBy: "No Team"},
]