import Player from './Player'
import * as api from '../utils/api'

class Ranking extends Player{
    public player: any
    public async setData(username: any) {
      this.player = await (await api.getPlayerInfo(username)).data
      this.id = this.player.id
      this.name = this.player.name
      this.profileIconId = this.player.profileIconId
      this.puuid = this.player.puuid
      this.summonerLevel = this.player.summonerLevel
      delete this.player
        return Ranking
    }
    constructor(){
        super()
    }


}
export default Ranking