import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
    this.products = this.products.filter(x => x.pageType === 'home')
  }

  addToCart(p: Product) {
    this.dService.addToCart(p);
  }
}
