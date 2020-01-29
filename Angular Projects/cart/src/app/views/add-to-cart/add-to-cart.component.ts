import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  num: number = 1;
  itemsInCart: IProduct[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.itemsInCart = this.dService.getCart();
    console.log(this.itemsInCart);
  }

  //add(n): number{
  //  return this.itemsInCart.quantity++;
  //}

  //subtract(n): number{
  //  return this.num--;
  //}
}
