import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount = 0;
  public $cartCount = new BehaviorSubject<number>(this.cartCount);

  constructor() { }

  addToCart(){
    this.cartCount++;
    this.$cartCount.next(this.cartCount);
  }
}
