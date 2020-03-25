import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  productDesc: Iproduct;

  constructor(private dService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('pName');

    this.dService.getProduct(id).subscribe(item => this.productDesc = item);
  }

}
