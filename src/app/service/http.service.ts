import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  countryAll = 'https://restcountries.eu/rest/v2/all';
  country = 'https://restcountries.eu/rest/v2/name/'

  getAllCountry() {
    return this.http.get(this.countryAll);
  }
  getCountry(name) {
    return this.http.get(this.country + name + '?fullText=true');
  }
}
