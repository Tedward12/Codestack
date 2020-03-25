import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Iproduct[] = [
  {
    id: '1',
    pName: 'Ninja Stars',
    pNameURL: 'NinjaStars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: 'View in Cart'
  },
  {
    id: '2',
    pName: 'Ninja Starz',
    pNameURL: 'NinjaStarz',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cutz',
    price: 'View in Cart'
  },
  {
    id: '3',
    pName: 'Ninja Starzzz',
    pNameURL: 'NinjaStarzzz',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cutzzz',
    price: 'View in Cart'
  },
  {
    id: '4',
    pName: 'xX-Ninja Stars-Xx',
    pNameURL: 'xX-NinjaStars-Xx',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'xX-May Cause Paper Cuts-Xx',
    price: 'View in Cart'
  }
];
  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  getProduct(sku: string): Observable<Iproduct>{
    return of(
      this.products.find(
        x => x.id === sku
      )
    );
  }
}
