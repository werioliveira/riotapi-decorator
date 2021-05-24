interface Ranking {
        queueType?: string
        tier?: string
        rank?: string
        leaguePoints?: number 
}

abstract class Player {
    name: string
    id: string
    puuid: string
    profileIconId: number
    summonerLevel: number
    ranking?: Ranking
    constructor(){
        this.name = "teste"
        this.id = "player.id"
        this.puuid = "player.puuid"
        this.profileIconId = 12
        this.summonerLevel = 33
    }
    /**
     * getPlayer
     */
    public getPlayer() {
        return Player
    }
    public async setData(){}
       

}
export default Player