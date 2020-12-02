import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { HttpService } from '../service/http.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Details } from '../models/details'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryName;
  countryDetails:Details;
  faArrowLeft = faArrowLeft;
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.countryName = this.route.snapshot.params['country']
    this.http.getCountry(this.countryName).subscribe(data => {
      this.countryDetails = data[0]
      console.log(this.countryDetails)
    })
  }

}
