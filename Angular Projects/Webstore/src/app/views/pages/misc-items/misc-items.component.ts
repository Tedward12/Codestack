import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-misc-items',
  templateUrl: './misc-items.component.html',
  styleUrls: ['./misc-items.component.scss']
})
export class MiscItemsComponent implements OnInit {

  miscItems: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.miscItems = this.dService.getProducts();
    this.miscItems = this.miscItems.filter(x => x.pType === 'misc')
  }
}
