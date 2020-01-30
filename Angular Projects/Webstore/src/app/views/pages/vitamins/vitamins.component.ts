import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vitamins',
  templateUrl: './vitamins.component.html',
  styleUrls: ['./vitamins.component.scss']
})
export class VitaminsComponent implements OnInit {

  vitamins: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.vitamins = this.dService.getProducts();
    this.vitamins = this.vitamins.filter(x => x.pType === 'vitamins')
  }

}
