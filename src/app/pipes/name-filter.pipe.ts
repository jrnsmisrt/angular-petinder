import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Pet[], searchName: string): any[] {
    let lowerCaseSearchName = searchName.toLowerCase();
    return items.filter(item=>{
      return item.name.toLowerCase().includes(lowerCaseSearchName);
    });
  }

}
