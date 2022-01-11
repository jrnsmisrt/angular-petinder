import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  name: string|any;

  sendTextForm= this.formBuilder.group({
    name:''
  });
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.name = params['name'];
    });
  }

}
