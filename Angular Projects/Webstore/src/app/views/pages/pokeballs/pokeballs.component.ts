import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pokeballs',
  templateUrl: './pokeballs.component.html',
  styleUrls: ['./pokeballs.component.scss']
})
export class PokeballsComponent implements OnInit {

  pokeballs: Product[];

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.pokeballs = this.dService.getProducts();
    this.pokeballs = this.pokeballs.filter(x => x.pType === 'pokeballs')
  }

}
