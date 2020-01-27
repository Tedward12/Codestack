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
    {pName:"Black Apricorn",price:"$500",img:"assets/images/blackApricorn.png"},
    {pName:"Blue Apricorn",price:"$500",img:"assets/images/blueApricorn.png"},
    {pName:"Grean Apricorn",price:"$500",img:"assets/images/greenApricorn.png"},
    {pName:"Light Blue Apricorn",price:"$500",img:"assets/images/lightBlueApricorn.png"},
    {pName:"Red Apricorn",price:"$500",img:"assets/images/redApricorn.png"},
    {pName:"Orange Apricorn",price:"$500",img:"assets/images/orangeApricorn.png"},
    {pName:"Pink Apricorn",price:"$500",img:"assets/images/pinkApricorn.png"},
    {pName:"Purple Apricorn",price:"$500",img:"assets/images/purpleApricorn.png"},
    {pName:"White Apricorn",price:"$500",img:"assets/images/whiteApricorn.png"},
    {pName:"Yellow Apricorn",price:"$500",img:"assets/images/yellowApricorn.png"},
    {pName:"Antidote",price:"$200",img:"assets/images/antidote.png"},
    {pName:"Awakening",price:"$200",img:"assets/images/awakening.png"},
    {pName:"Ice Heal",price:"$200",img:"assets/images/iceHeal.png"},
    {pName:"Burn Heal",price:"$200",img:"assets/images/burnHeal.png"},
    {pName:"Paralyze Heal",price:"$200",img:"assets/images/paralyzeHeal.png"},
    {pName:"Full Heal",price:"$600",img:"assets/images/fullHeal.png"},
    {pName:"Lemonade",price:"$350",img:"assets/images/lemonade.png"},
    {pName:"Soda Pop",price:"$300",img:"assets/images/sodaPop.png"},
    {pName:"Fresh Water",price:"$300",img:"assets/images/freshWater.png"},
    {pName:"Moo Moo Milk",price:"$500",img:"assets/images/moomooMilk.png"},
    {pName:"Potion",price:"$300",img:"assets/images/potion.png"},
    {pName:"Super Potion",price:"$700",img:"assets/images/superPotion.png"},
    {pName:"Hyper Potion",price:"$1,500",img:"assets/images/hyperPotion.png"},
    {pName:"Max Potion",price:"$2,500",img:"assets/images/maxPotion.png"},
    {pName:"Full Restore",price:"$3,000",img:"assets/images/fullRestore.png"},
    {pName:"Revive",price:"$2,000",img:"assets/images/revive.png"},
    {pName:"Max Revive",price:"$4,000",img:"assets/images/maxRevive.png"},
    {pName:"Sacred Ash",price:"$20,000",img:"assets/images/sacredAsh.png"},
    {pName:"Energy Powder",price:"$500",img:"assets/images/energyPowder.png"},
    {pName:"Heal Powder",price:"$450",img:"assets/images/healPowder.png"},
    {pName:"Old Gateau",price:"$350",img:"assets/images/oldGateau.png"},
    {pName:"Calcium",price:"$9,800",img:"assets/images/calcium.png"},
    {pName:"Carbos",price:"$9,800",img:"assets/images/carbos.png"},
    {pName:"HP Up",price:"$9,800",img:"assets/images/hpUp.png"},
    {pName:"Iron",price:"$9,800",img:"assets/images/iron.png"},
    {pName:"Protein",price:"$9,800",img:"assets/images/protein.png"},
    {pName:"Zinc",price:"$9,800",img:"assets/images/zinc.png"},
    {pName:"PP Max",price:"$9,800",img:"assets/images/ppMax.png"},
    {pName:"PP Up",price:"$9,800",img:"assets/images/ppUp.png"},
    {pName:"Dire Hit",price:"$1,000",img:"assets/images/direHit.png"},
    {pName:"Guard Spec",price:"$1,500",img:"assets/images/guardSpec.png"},
    {pName:"X-Accuracy",price:"$1,000",img:"assets/images/xAccuracy.png"},
    {pName:"X-Attack",price:"$1,000",img:"assets/images/xAttack.png"},
    {pName:"X-Defense",price:"$1,000",img:"assets/images/xDefense.png"},
    {pName:"X-Special Attack",price:"$1,000",img:"assets/images/xSpAtk.png"},
    {pName:"X-Special Defense",price:"$1,000",img:"assets/images/xSpDef.png"},
    {pName:"X-Speed",price:"$1,000",img:"assets/images/xSpeed.png"},
    {pName:"Bike",price:"$1,000,000",img:"assets/images/bike.png"},
    {pName:"Escape Rope",price:"$2,000",img:"assets/images/escapeRope.png"},
    {pName:"Rare Candy",price:"$50,000",img:"assets/images/rareCandy.png"},
    {pName:"Repel",price:"$400",img:"assets/images/repel.png"},
    {pName:"Super Repel",price:"$700",img:"assets/images/superRepel.png"},
    {pName:"Max Repel",price:"$900",img:"assets/images/maxRepel.png"},
    {pName:"Ether",price:"$1,200",img:"assets/images/ether.png"},
    {pName:"Max Ether",price:"$2,000",img:"assets/images/maxEther.png"},
    {pName:"Elixir",price:"$3,000",img:"assets/images/elixir.png"},
    {pName:"Max Elixir",price:"$2,000",img:"assets/images/maxElixir.png"}
  ]

  cart: [
    {cImg:"",cPrice:"",cQuantity:"",cTotal:""},
  ]
  constructor() { }
}
