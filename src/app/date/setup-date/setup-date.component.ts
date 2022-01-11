import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";
import {Observable} from "rxjs";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  name: string | any;
  pet$!: Observable<Pet>;

  private _pet!: Pet;
  sendTextForm = this.formBuilder.group({
    name: ''
  });

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private petService: PetService
  ) {

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.pet$ = this.petService.findPetByName(this.name);
  }

  get pet() {
    return this.pet$;
  }

}
