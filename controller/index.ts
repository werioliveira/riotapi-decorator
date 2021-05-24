import {Request, Response} from 'express'
import Ranking from '../class/Ranking'
import RankingPlayer from '../class/RankingPlayer'

async function index(req: Request, res: Response){
    let p1 = new Ranking()
    p1.setData(req.params.params).then(value=>{
        let p2 = new RankingPlayer(p1)
        p2.getRanking().then(value=>{
            return res.json(p2)
        }).catch(err=>{
            return res.json({'1':err})
        })
        
    }).catch(err=>{
        return res.json({'2°':err})
    })    
}

export default index