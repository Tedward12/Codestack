import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: IProduct[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }

  addToCart(p: IProduct) {
    this.dService.addToCart(p);
  }

}
