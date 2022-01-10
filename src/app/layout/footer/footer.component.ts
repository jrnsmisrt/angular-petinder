import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
    this._year = new Date().getFullYear();
  }
  private _year: number;

  get year(): number{
    return this._year;
  }
  ngOnInit(): void {
  }

}
