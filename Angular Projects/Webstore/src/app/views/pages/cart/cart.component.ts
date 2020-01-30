import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  num: number = 1;
  itemsInCart: Product[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.itemsInCart = this.dService.getCart();
    console.log(this.itemsInCart);
  }

  remove(id: Product){
    this.dService.removeItem(id);
  }

  removeAll(){
    this.dService.emptyCart();
  }

}
