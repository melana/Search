import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchRow = false;
  searchForm = false;

  /*
  form: FormGroup = new FormGroup{(
    "search": new FormControl(),
    "my": new FormControl(),
    "author": new FormControl(),
    "sort": new FormControl(),
    "member": new FormControl(),
    "title": new FormControl(),
    "strict": new FormControl(),

  )};
  */

  constructor() { }

  searchOff(){
      this.searchRow = false;
      this.searchForm = false;
  }

  searchOn(){
    this.searchRow = true;

  }

  formOn(){
    this.searchForm = true;
  }

  ngOnInit(): void {
    
  }
}

