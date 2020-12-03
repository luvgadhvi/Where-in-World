import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service'
import { Country } from '../models/country';
import { CountryService } from '../service/country.service'

@Component({
  selector: 'country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.scss']
})
export class CountryCardsComponent implements OnInit {
  allCountryList;
  filterCountryList;
  constructor(private http: HttpService,
    private filter: CountryService) {

  }
  ngOnInit() {
    //API call to get all countries details.
    this.http.getAllCountry()
      .subscribe((data: Country) => {
        this.allCountryList = data;
        this.filterCountryList = data;
      });
    //Service to Receive Value from Filter component.
    this.filter.receivedFilter.subscribe((filter: object) => {
      this.onFilterChange(filter)
    });
  }
  /*
  This function will Filter out the List according to search value and selected region
  received from Service and display the value accordingly.
  */

  onFilterChange(filter) {
    if (filter.region === '' && filter.searchValue === '') {
      this.filterCountryList = this.allCountryList;
    }
    else if (filter.region === '') {
      this.filterCountryList = this.allCountryList.filter((country) =>
        country.name.toLowerCase().includes(filter.searchValue.toLowerCase()))
    }
    else {
      this.filterCountryList = this.allCountryList.filter((country) =>
        country.name.toLowerCase().includes(filter.searchValue.toLowerCase()) && filter.region === country.region
      )
    }
  }

}
