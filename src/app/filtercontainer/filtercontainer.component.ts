import { Component, OnInit } from '@angular/core';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CountryService } from '../service/country.service'

@Component({
  selector: 'filtercontainer',
  templateUrl: './filtercontainer.component.html',
  styleUrls: ['./filtercontainer.component.scss']
})
export class FiltercontainerComponent implements OnInit {
  faSearch = faSearch
  faAngleDown = faAngleDown
  RegionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  searchText = '';
  regionSelected = '';
  constructor(private filter: CountryService) { }

  ngOnInit(): void {

  }

  changeRegion(event) {
    this.regionSelected = event.target.value
    this.filterChange()
  }

  onSearchChange(searchValue: string): void {
    this.searchText = searchValue;
    this.filterChange()
  }

  filterChange() {
    this.filter.raiseEvent({
      region: this.regionSelected,
      searchValue: this.searchText
    });
  }


}
