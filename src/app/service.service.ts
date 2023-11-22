// display.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class service {
  displayArray(users: any[]): void {
    console.log("Array is displayed by Display service");
    console.log(users);
  }
}
