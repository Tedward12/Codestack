import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: [
    {pName:"Pokeball",price:"$200",img:"assets/images/pokeBall.png"},
    {pName:"Great Ball",price:"$600",img:"assets/images/greatBall.png"},
    {pName:"Ultra Ball",price:"$1,200",img:"assets/images/ultraBall.png"},
    {pName:"Premier Ball",price:"$250",img:"assets/images/premierBall.png"},
    {pName:"Luxury Ball",price:"$3,000",img:"assets/images/luxuryBall.png"},
    {pName:"Master Ball",price:"$250,000",img:"assets/images/masterBall.png"},
    {pName:"Quick Ball",price:"$1,000",img:"assets/images/quickBall.png"},
    {pName:"Repeat Ball",price:"$1,000",img:"assets/images/repeatBall.png"},
    {pName:"Timer Ball",price:"$1,000",img:"assets/images/timerBall.png"},
    {pName:"Dusk Ball",price:"$1,000",img:"assets/images/duskBall.png"},
    {pName:"Safari Ball",price:"$1,000",img:"assets/images/safariBall.png"},
    {pName:"NestBall",price:"$1,000",img:"assets/images/nestBall.png"},
    {pName:"Heal Ball",price:"$1,000",img:"assets/images/healBall.png"},
    {pName:"Net Ball",price:"$1,000",img:"assets/images/netBall.png"},
    {pName:"Dive Ball",price:"$1,000",img:"assets/images/diveBall.png"},
    {pName:"Love Ball",price:"$1,000",img:"assets/images/lopveBall.png"},
    {pName:"Friend Ball",price:"$1,000",img:"assets/images/friendBall.png"},
    {pName:"Sport Ball",price:"$1,000",img:"assets/images/sportBall.png"},
    {pName:"Lure Ball",price:"$1,000",img:"assets/images/lureBall.png"},
    {pName:"Heavy Ball",price:"$1,000",img:"assets/images/heavyBall.png"},
    {pName:"Moon Ball",price:"$1,000",img:"assets/images/moonBall.png"},
    {pName:"Park Ball",price:"$1,000",img:"assets/images/parkBall.png"},
    {pName:"Fast Ball",price:"$1,000",img:"assets/images/fastBall.png"},
    {pName:"Level Ball",price:"$1,000",img:"assets/images/levelBall.png"},
    {pName:"Dream Ball",price:"$25,000",img:"assets/images/dreamBall.png"},
    {pName:"Cherish Ball",price:"$25,000",img:"assets/images/cherishBall.png"},
    {pName:"Beast Ball",price:"$100,000",img:"assets/images/beastBall.png"},

  ]
  constructor() { }
}
