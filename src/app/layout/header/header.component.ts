import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this._title = 'Petinder';
  }
  private _title: string;

  get title(): string{
    return this._title;
  }

  ngOnInit(): void {
  }
}
