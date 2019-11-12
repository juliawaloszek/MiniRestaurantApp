import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantData } from '../_models/restaurant-data';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class RestaurantService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(): Observable<RestaurantData[]> {
    return this.http.get<RestaurantData[]>(this.baseUrl + 'data');
  }


}
