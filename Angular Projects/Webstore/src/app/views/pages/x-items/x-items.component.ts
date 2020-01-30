import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-x-items',
  templateUrl: './x-items.component.html',
  styleUrls: ['./x-items.component.scss']
})
export class XItemsComponent implements OnInit {

  xItems: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.xItems = this.dService.getProducts();
    this.xItems = this.xItems.filter(x => x.pType === 'xItems')
  }

}
