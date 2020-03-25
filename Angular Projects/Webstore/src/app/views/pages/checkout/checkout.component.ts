import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cart: Product[] = [];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cart = this.dService.getCart();
  }

  clearCart(){
    this.cart = [];
    this.dService.itemsInCart = this.cart;
  }

}
