import { Injectable } from '@angular/core';
import { Product } from 'src/app/views/interfaces/product'
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  itemsInCart: Product[] = [];

  login: Login = {
    username: 'Username',
    password: 'password',
    email: 'something@something.com',
    fName: 'First Name',
    lName: 'Last Name',
    sAddress: 'Shipping Address'
  };

  private products: Product[] = [
    { numPrice: 200, dealPrice: '$180', pageType: 'deal', quantity: 1, id: "1", pName: "Pokeball", price: "$200", img: "assets/images/pokeBall.png", pType: "pokeballs", pDesc: "Is used for catching and storing Pokémon." },
    { numPrice: 600, dealPrice: '', pageType: '', quantity: 1, id: "2", pName: "Great Ball", price: "$600", img: "assets/images/greatBall.png", pType: "pokeballs", pDesc: "It is an improved variant of the regular Poké Ball that can be used to catch wild Pokémon." },
    { numPrice: 1200, dealPrice: '', pageType: '', quantity: 1, id: "3", pName: "Ultra Ball", price: "$1,200", img: "assets/images/ultraBall.png", pType: "pokeballs", pDesc: "It is an improved variant of the Great Ball that can be used to catch wild Pokémon." },
    { numPrice: 250, dealPrice: '', pageType: '', quantity: 1, id: "4", pName: "Premier Ball", price: "$250", img: "assets/images/premierBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon." },
    { numPrice: 3000, dealPrice: '', pageType: '', quantity: 1, id: "5", pName: "Luxury Ball", price: "$3,000", img: "assets/images/luxuryBall.png", pType: "pokeballs", pDesc: " Pokémon caught in a Luxury Ball gain friendship more quickly." },
    { numPrice: 250000, dealPrice: '', pageType: 'home', quantity: 1, id: "6", pName: "Master Ball", price: "$250,000", img: "assets/images/masterBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon without fail." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "7", pName: "Quick Ball", price: "$1,000", img: "assets/images/quickBall.png", pType: "pokeballs", pDesc: " It can be used to catch a wild Pokémon, being more likely to succeed if used at the start of the encounter." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "8", pName: "Repeat Ball", price: "$1,000", img: "assets/images/repeatBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed if the Pokémon is already registered as caught in the Trainer's Pokédex." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "9", pName: "Timer Ball", price: "$1,000", img: "assets/images/timerBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed the longer it has been since the start of the battle." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "10", pName: "Dusk Ball", price: "$1,000", img: "assets/images/duskBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed if used at night or in a cave." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "11", pName: "Safari Ball", price: "$1,000", img: "assets/images/safariBall.png", pType: "pokeballs", pDesc: "It can be used to catch wild Pokémon during a Safari Game." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "12", pName: "NestBall", price: "$1,000", img: "assets/images/nestBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed against lower level Pokémon." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "13", pName: "Heal Ball", price: "$1,000", img: "assets/images/healBall.png", pType: "pokeballs", pDesc: "A Pokémon caught in a Heal Ball is fully healed." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "14", pName: "Net Ball", price: "$1,000", img: "assets/images/netBall.png", pType: "pokeballs", pDesc: " It can be used to catch a wild Pokémon, being more likely to succeed against a Water- and Bug-type Pokémon." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "15", pName: "Dive Ball", price: "$1,000", img: "assets/images/diveBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed in water encounters, originally specifically underwater encounters." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "16", pName: "Love Ball", price: "$1,000", img: "assets/images/loveBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed against a Pokémon of the opposite gender to the Trainer's Pokémon." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "17", pName: "Friend Ball", price: "$1,000", img: "assets/images/friendBall.png", pType: "pokeballs", pDesc: " Pokémon caught in a Friend Ball become more friendly." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "18", pName: "Sport Ball", price: "$1,000", img: "assets/images/sportBall.png", pType: "pokeballs", pDesc: "It can be used to catch wild Pokémon during a Bug-Catching Contest at National Park." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "19", pName: "Lure Ball", price: "$1,000", img: "assets/images/lureBall.png", pType: "pokeballs", pDesc: " It can be used to catch a wild Pokémon, being more likely to succeed in fishing encounters." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "20", pName: "Heavy Ball", price: "$1,000", img: "assets/images/heavyBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed the heavier the Pokémon is." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "21", pName: "Moon Ball", price: "$1,000", img: "assets/images/moonBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed against Pokémon that evolve by using Moon Stone and their evolutionary relatives." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "22", pName: "Park Ball", price: "$1,000", img: "assets/images/parkBall.png", pType: "pokeballs", pDesc: "It can be used to re-catch Pokémon migrated to Pal Park." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "23", pName: "Fast Ball", price: "$1,000", img: "assets/images/fastBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed against Pokémon that are fast or quick to flee." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "24", pName: "Level Ball", price: "$1,000", img: "assets/images/levelBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed the higher the Trainer's Pokémon's level is than the wild Pokémon's." },
    { numPrice: 25000, dealPrice: '', pageType: 'home', quantity: 1, id: "25", pName: "Dream Ball", price: "$25,000", img: "assets/images/dreamBall.png", pType: "pokeballs", pDesc: "Pokémon transferred from Pokémon Dream Radar are inside Dream Balls." },
    { numPrice: 25000, dealPrice: '', pageType: '', quantity: 1, id: "26", pName: "Cherish Ball", price: "$25,000", img: "assets/images/cherishBall.png", pType: "pokeballs", pDesc: "A type of Poké Ball introduced in Generation IV. Event Pokémon are often contained in a Cherish Ball." },
    { numPrice: 100000, dealPrice: '', pageType: 'home', quantity: 1, id: "27", pName: "Beast Ball", price: "$100,000", img: "assets/images/beastBall.png", pType: "pokeballs", pDesc: "It can be used to catch a wild Pokémon, being more likely to succeed against Ultra Beasts and less likely against other Pokémon." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "28", pName: "Black Apricorn", price: "$500", img: "assets/images/blackApricorn.png", pType: "apricorns", pDesc: " It can be used to make a Heavy Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "29", pName: "Blue Apricorn", price: "$500", img: "assets/images/blueApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Lure Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "30", pName: "Grean Apricorn", price: "$500", img: "assets/images/greenApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Friend Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "31", pName: "Light Blue Apricorn", price: "$500", img: "assets/images/lightBlueApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Dive Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "32", pName: "Red Apricorn", price: "$500", img: "assets/images/redApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Level Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "33", pName: "Orange Apricorn", price: "$500", img: "assets/images/orangeApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Sport Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "34", pName: "Pink Apricorn", price: "$500", img: "assets/images/pinkApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Love Ball." },
    { numPrice: 200000, dealPrice: '', pageType: '', quantity: 1, id: "35", pName: "Purple Apricorn", price: "$200,000", img: "assets/images/purpleApricorn.png", pType: "apricorns", pDesc: "A very rare version of an apricorn. It can be used to make a Master Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "36", pName: "White Apricorn", price: "$500", img: "assets/images/whiteApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Fast Ball." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "37", pName: "Yellow Apricorn", price: "$500", img: "assets/images/yellowApricorn.png", pType: "apricorns", pDesc: "It can be used to make a Moon Ball." },
    { numPrice: 200, dealPrice: '', pageType: '', quantity: 1, id: "38", pName: "Antidote", price: "$200", img: "assets/images/antidote.png", pType: "healing", pDesc: "It cures a Pokémon of poison." },
    { numPrice: 200, dealPrice: '', pageType: '', quantity: 1, id: "39", pName: "Awakening", price: "$200", img: "assets/images/awakening.png", pType: "healing", pDesc: "It cures a Pokémon of sleep." },
    { numPrice: 200, dealPrice: '', pageType: '', quantity: 1, id: "40", pName: "Ice Heal", price: "$200", img: "assets/images/iceHeal.png", pType: "healing", pDesc: "It cures a Pokémon of frozen." },
    { numPrice: 200, dealPrice: '', pageType: '', quantity: 1, id: "41", pName: "Burn Heal", price: "$200", img: "assets/images/burnHeal.png", pType: "healing", pDesc: "It cures a Pokémon of burn." },
    { numPrice: 200, dealPrice: '', pageType: '', quantity: 1, id: "42", pName: "Paralyze Heal", price: "$200", img: "assets/images/paralyzeHeal.png", pType: "healing", pDesc: "It cures a Pokémon of paralyze." },
    { numPrice: 600, dealPrice: '', pageType: '', quantity: 1, id: "43", pName: "Full Heal", price: "$600", img: "assets/images/fullHeal.png", pType: "healing", pDesc: "It can be used to cure a Pokémon of all non-volatile status conditions and confusion." },
    { numPrice: 350, dealPrice: '', pageType: 'home', quantity: 1, id: "44", pName: "Lemonade", price: "$350", img: "assets/images/lemonade.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 70 HP. It is consumed after use." },
    { numPrice: 300, dealPrice: '$270', pageType: 'deal', quantity: 1, id: "45", pName: "Soda Pop", price: "$300", img: "assets/images/sodaPop.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 50 HP. It is consumed after use." },
    { numPrice: 300, dealPrice: '', pageType: '', quantity: 1, id: "46", pName: "Fresh Water", price: "$300", img: "assets/images/freshWater.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 30 HP. It is consumed after use." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "47", pName: "Moo Moo Milk", price: "$500", img: "assets/images/moomooMilk.png", pType: "healing", pDesc: "It is a drink that restores a Pokémon by 100 HP." },
    { numPrice: 300, dealPrice: '$270', pageType: 'deal', quantity: 1, id: "48", pName: "Potion", price: "$300", img: "assets/images/potion.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 20 HP." },
    { numPrice: 700, dealPrice: '', pageType: '', quantity: 1, id: "49", pName: "Super Potion", price: "$700", img: "assets/images/superPotion.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 60 HP." },
    { numPrice: 1500, dealPrice: '', pageType: '', quantity: 1, id: "50", pName: "Hyper Potion", price: "$1,500", img: "assets/images/hyperPotion.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 120 HP." },
    { numPrice: 2500, dealPrice: '', pageType: '', quantity: 1, id: "51", pName: "Max Potion", price: "$2,500", img: "assets/images/maxPotion.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon to its full HP." },
    { numPrice: 3000, dealPrice: '', pageType: '', quantity: 1, id: "52", pName: "Full Restore", price: "$3,000", img: "assets/images/fullRestore.png", pType: "healing", pDesc: "It fully restores a Pokémon's HP and cures it of all non-volatile status conditions and confusion." },
    { numPrice: 2000, dealPrice: '$1,800', pageType: 'deal', quantity: 1, id: "53", pName: "Revive", price: "$2,000", img: "assets/images/revive.png", pType: "healing", pDesc: "It revives a fainted Pokémon and restores half of its maximum HP." },
    { numPrice: 4000, dealPrice: '', pageType: '', quantity: 1, id: "54", pName: "Max Revive", price: "$4,000", img: "assets/images/maxRevive.png", pType: "healing", pDesc: "It revives a fainted Pokémon and restores all of its HP." },
    { numPrice: 20000, dealPrice: '', pageType: 'home', quantity: 1, id: "55", pName: "Sacred Ash", price: "$20,000", img: "assets/images/sacredAsh.png", pType: "healing", pDesc: "When used from the Bag, Sacred Ash fully restores the HP of all fainted Pokémon in the party. It can only be used outside of battle. It is consumed after use." },
    { numPrice: 500, dealPrice: '', pageType: '', quantity: 1, id: "56", pName: "Energy Powder", price: "$500", img: "assets/images/energyPowder.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it heals the Pokémon by 60 HP but lowers its friendship. It is consumed after use." },
    { numPrice: 450, dealPrice: '', pageType: '', quantity: 1, id: "57", pName: "Heal Powder", price: "$450", img: "assets/images/healPowder.png", pType: "healing", pDesc: "When used from the Bag on a Pokémon, it cures a Pokémon of all non-volatile status conditions (poison, paralysis, sleep, burn, freeze) and confusion but lowers its friendship. It is consumed after use." },
    { numPrice: 350, dealPrice: '', pageType: '', quantity: 1, id: "58", pName: "Old Gateau", price: "$350", img: "assets/images/oldGateau.png", pType: "healing", pDesc: "It is a local specialty of the Old Chateau and cures a Pokémon from all non-volatile status conditions and confusion." },
    { numPrice: 9800, dealPrice: '', pageType: 'home', quantity: 1, id: "59", pName: "Calcium", price: "$9,800", img: "assets/images/calcium.png", pType: "vitamins", pDesc: "It increases the Special Attack of a Pokémon." },
    { numPrice: 9800, dealPrice: '', pageType: '', quantity: 1, id: "60", pName: "Carbos", price: "$9,800", img: "assets/images/carbos.png", pType: "vitamins", pDesc: "It increases the Speed of a Pokémon." },
    { numPrice: 9800, dealPrice: '', pageType: '', quantity: 1, id: "61", pName: "HP Up", price: "$9,800", img: "assets/images/hpUp.png", pType: "vitamins", pDesc: "It increases the HP of a Pokémon." },
    { numPrice: 9800, dealPrice: '', pageType: '', quantity: 1, id: "62", pName: "Iron", price: "$9,800", img: "assets/images/iron.png", pType: "vitamins", pDesc: "It increases the Defense of a Pokémon." },
    { numPrice: 9800, dealPrice: '', pageType: '', quantity: 1, id: "63", pName: "Protein", price: "$9,800", img: "assets/images/protein.png", pType: "vitamins", pDesc: "It increases the Attack of a Pokémon." },
    { numPrice: 9800, dealPrice: '', pageType: 'home', quantity: 1, id: "64", pName: "Zinc", price: "$9,800", img: "assets/images/zinc.png", pType: "vitamins", pDesc: "It increases the Special Defense of a Pokémon." },
    { numPrice: 9800, dealPrice: '', pageType: '', quantity: 1, id: "65", pName: "PP Max", price: "$9,800", img: "assets/images/ppMax.png", pType: "vitamins", pDesc: "It raises the PP of a selected move to 8/5 of the move's base PP." },
    { numPrice: 9800, dealPrice: '', pageType: '', quantity: 1, id: "66", pName: "PP Up", price: "$9,800", img: "assets/images/ppUp.png", pType: "vitamins", pDesc: "It raises the PP of a selected move by 1/5 of the move's base PP." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "67", pName: "Dire Hit", price: "$1,000", img: "assets/images/direHit.png", pType: "xItems", pDesc: "It temporarily boosts the critical hit ratio." },
    { numPrice: 1500, dealPrice: '$1,350', pageType: 'deal', quantity: 1, id: "68", pName: "Guard Spec", price: "$1,500", img: "assets/images/guardSpec.png", pType: "xItems", pDesc: "It temporarily prevents stat reduction." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "69", pName: "X-Accuracy", price: "$1,000", img: "assets/images/xAccuracy.png", pType: "xItems", pDesc: "It temporarily boosts a Pokémon's accuracy." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "70", pName: "X-Attack", price: "$1,000", img: "assets/images/xAttack.png", pType: "xItems", pDesc: "It temporarily boosts the Attack stat." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "71", pName: "X-Defense", price: "$1,000", img: "assets/images/xDefense.png", pType: "xItems", pDesc: "t temporarily boosts the Defense stat." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "72", pName: "X-Special Attack", price: "$1,000", img: "assets/images/xSpAtk.png", pType: "xItems", pDesc: " It temporarily boosts the Special Attack stat." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "73", pName: "X-Special Defense", price: "$1,000", img: "assets/images/xSpDef.png", pType: "xItems", pDesc: "It temporarily boosts the Special Defense stat." },
    { numPrice: 1000, dealPrice: '', pageType: '', quantity: 1, id: "74", pName: "X-Speed", price: "$1,000", img: "assets/images/xSpeed.png", pType: "xItems", pDesc: "It temporarily boosts the Speed stat." },
    { numPrice: 1000000, dealPrice: '', pageType: 'home', quantity: 1, id: "75", pName: "Bike", price: "$1,000,000", img: "assets/images/bike.png", pType: "misc", pDesc: " Key Item obtained in the games to facilitate faster movement. They are usually obtained from Bicycle Shops." },
    { numPrice: 2000, dealPrice: '$1,800', pageType: 'deal', quantity: 1, id: "76", pName: "Escape Rope", price: "$2,000", img: "assets/images/escapeRope.png", pType: "misc", pDesc: "It is used to escape a cave or dungeon." },
    { numPrice: 50000, dealPrice: '', pageType: 'home', quantity: 1, id: "77", pName: "Rare Candy", price: "$50,000", img: "assets/images/rareCandy.png", pType: "misc", pDesc: "It increases that Pokémon's level by one, up to level 100. After leveling up, it will have the minimum required experience for its current level. If used on a fainted Pokémon, it will be revived." },
    { numPrice: 400, dealPrice: '$360', pageType: 'deal', quantity: 1, id: "78", pName: "Repel", price: "$400", img: "assets/images/repel.png", pType: "misc", pDesc: "When used from the Bag in the overworld, it prevents wild Pokémon with a lower level than the first member of the party from appearing for 100 steps." },
    { numPrice: 700, dealPrice: '', pageType: '', quantity: 1, id: "79", pName: "Super Repel", price: "$700", img: "assets/images/superRepel.png", pType: "misc", pDesc: "When used from the Bag in the overworld, it prevents wild Pokémon with a lower level than the first member of the party from appearing for 200 steps." },
    { numPrice: 900, dealPrice: '', pageType: '', quantity: 1, id: "80", pName: "Max Repel", price: "$900", img: "assets/images/maxRepel.png", pType: "misc", pDesc: "When used from the Bag in the overworld, it prevents wild Pokémon with a lower level than the first member of the party from appearing for 250 steps." },
    { numPrice: 1200, dealPrice: '$1,080', pageType: 'deal', quantity: 1, id: "81", pName: "Ether", price: "$1,200", img: "assets/images/ether.png", pType: "misc", pDesc: "It restores 10 PP for one of a Pokémon's moves." },
    { numPrice: 2000, dealPrice: '', pageType: '', quantity: 1, id: "82", pName: "Max Ether", price: "$2,000", img: "assets/images/maxEther.png", pType: "misc", pDesc: "It fully restores PP for one of a Pokémon's moves." },
    { numPrice: 2000, dealPrice: '$1,800', pageType: 'deal', quantity: 1, id: "83", pName: "Elixir", price: "$2,000", img: "assets/images/elixir.png", pType: "misc", pDesc: "It restores 10 PP for all of a Pokémon's moves." },
    { numPrice: 3000, dealPrice: '', pageType: '', quantity: 1, id: "84", pName: "Max Elixir", price: "$3,000", img: "assets/images/maxElixir.png", pType: "misc", pDesc: " It fully restores PP for all of a Pokémon's moves." }
  ];
  constructor() { }

  addToCart(cartItem: Product) {
    if (!this.itemsInCart.includes(cartItem)) {
      this.itemsInCart.push(cartItem);
    }
    else if (this.itemsInCart.includes(cartItem)) {
      cartItem.quantity++;
    }
  }
  getProducts(): Product[] {
    return this.products;
  }

  getCart(): Product[] {
    return this.itemsInCart;
  }

  emptyCart() {
    this.itemsInCart.length = 0;
  }

  removeItem(id: Product): void {
    const index = this.findItemInCart(id);
    this.itemsInCart[index].quantity = 1;
    this.itemsInCart.splice(index, 1);
  }

  findItemInCart(id: Product): number {
    return this.itemsInCart.indexOf(id);
  }

  setLogin() {
    return this.login;
  }
}

