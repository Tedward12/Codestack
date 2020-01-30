import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  products: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
    this.products = this.products.filter(x => x.pageType === 'deal')
  }

}
