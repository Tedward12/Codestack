import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab2Page } from '../tab2/tab2.page';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }

  getCountry(country){
    return this.http.get(`${this.apiUrl}countries/${country}`);
  }
}
