import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemsInCart: IProduct[] = [];

  products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Stars',
      additionalInfo: 'May Cause Paper Cuts',
      price: '$1,000,000',
      numPrice: 1000000,
      quantity: 1
    },
    {
      id: '2',
      pName: 'Ninja Starz',
      pNameURL: 'NinjaStarz',
      pDesc: 'Paper Ninja Starz',
      additionalInfo: 'May Cause Paper Cutz',
      price: '$100,000',
      numPrice: 100000,
      quantity: 1
    },
    {
      id: '3',
      pName: 'Ninja Starzzz',
      pNameURL: 'NinjaStarzzz',
      pDesc: 'Paper Ninja Starzzz',
      additionalInfo: 'May Cause Paper Cutzzz',
      price: '$10,000',
      numPrice: 10000,
      quantity: 1
    },
    {
      id: '4',
      pName: 'Ninja Starzzzzz',
      pNameURL: 'NinjaStarzzzzz',
      pDesc: 'Paper Ninja Starzzzzz',
      additionalInfo: 'May Cause Paper Cutzzzzz',
      price: '$1,000',
      numPrice: 1000,
      quantity: 1
    }
  ];
  constructor() { }

  getProducts(): IProduct[]{
    return this.products;
  }

  addToCart(cartItem: IProduct) {
    if(!this.itemsInCart.includes(cartItem)){
      this.itemsInCart.push(cartItem);
    }
    else if(this.itemsInCart.includes(cartItem)){
      cartItem.quantity++;
    }
  }

  getCart(): IProduct[]{
    return this.itemsInCart;
  }

  setQuantity() {

  }

  getQuantity() {

  }

  emptyCart(){
    this.itemsInCart.length = 0;
  }

  removeItem(id: IProduct): void {
    const index = this.findItemInCart(id);
    this.itemsInCart[index].quantity = 1;
    this.itemsInCart.splice(index,1);
  }

  findItemInCart(id: IProduct): number{
    return this.itemsInCart.indexOf(id); 
  }
}
