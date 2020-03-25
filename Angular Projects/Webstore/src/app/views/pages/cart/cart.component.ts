import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total: number = 0;
  num: number = 1;
  itemsInCart: Product[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.itemsInCart = this.dService.getCart();
    console.log(this.itemsInCart);
    for(let i = 0; i < this.itemsInCart.length; i++){
      this.total += this.itemsInCart[i].quantity * this.itemsInCart[i].numPrice;
    }
  }

  remove(id: Product){
    this.dService.removeItem(id);
    this.total = 0;
    for(let i = 0; i < this.itemsInCart.length; i++){
      this.total += this.itemsInCart[i].quantity * this.itemsInCart[i].numPrice;
    }
  }

  removeAll(){
    this.dService.emptyCart();
  }

}
