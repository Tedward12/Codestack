import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-healing-items',
  templateUrl: './healing-items.component.html',
  styleUrls: ['./healing-items.component.scss']
})
export class HealingItemsComponent implements OnInit {

  healing: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.healing = this.dService.getProducts();
    this.healing = this.healing.filter(x => x.pType === 'healing')
  }
}
