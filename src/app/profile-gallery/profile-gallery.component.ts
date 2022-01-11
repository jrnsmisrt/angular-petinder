import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})

export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];
  selectedPet: Pet | any;
  searchText: string;
  addPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
    this.selectedPet = undefined;
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet, event: Event) {
    this.selectedPet = pet;
    event.stopPropagation();
  }

  deletePet(pet: Pet) {
    this.selectedPet = pet;
    this.petService.deletePet(this.selectedPet).subscribe(
      data => {
        this.getPets();
        this.selectedPet = null;
      }
    )
  }

  onSubmit(): void {
    this.petService.addPet(this.addPetForm.value)
      .subscribe(pet => {
          this.addPetForm.reset();
          this.getPets()

        }
      );


  }

}
