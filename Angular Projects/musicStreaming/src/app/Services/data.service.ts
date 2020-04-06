import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = environment.api;
  url = 'localhost:5000/music'
  constructor(private http: HttpClient) { }

  GetTracks(){
    return this.http.get(this.apiUrl);
  }

  addTrack(request: any){
    return this.http.post(this.apiUrl, request);
  }
}
