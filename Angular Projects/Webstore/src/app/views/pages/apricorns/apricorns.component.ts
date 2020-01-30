import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-apricorns',
  templateUrl: './apricorns.component.html',
  styleUrls: ['./apricorns.component.scss']
})
export class ApricornsComponent implements OnInit {

  apricorns: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.apricorns = this.dService.getProducts();
    this.apricorns = this.apricorns.filter(x => x.pType === 'apricorns')
  }

  addToCart(p: Product) {
    this.dService.addToCart(p);
  }
}
