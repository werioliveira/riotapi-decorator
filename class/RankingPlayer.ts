import PlayerDecorator from './PlayerDecorator'
import * as api from '../utils/api'
export default class RankingPlayer extends PlayerDecorator{
    constructor(player: any){
        super()
        this.id = player.id
        this.name = player.name
        this.profileIconId = player.profileIconId
        this.puuid = player.puuid
        this.summonerLevel = player.summonerLevel
    }
    /**
     * getRanking
     */
    public async getRanking() {
        let ranking = await (await api.getRankPlayer(this.id)).data
        this.ranking = ranking
    }

}