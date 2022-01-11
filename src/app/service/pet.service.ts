import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url: string;


  constructor(private http: HttpClient) {
    this.url = `https://jeroenspetinder.herokuapp.com/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.url)
      .pipe(map(response => response.sort((a: Pet, b: Pet) => a.name.localeCompare(b.name))));
  }

  addPet(pet: Pet) {
    return this.http.post(this.url, pet);
  }

  deletePet(id: number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  findPetByName(name: string): Observable<any> {
   return this.http.get<Pet>(`${this.url}/${name}`);
  }
}
