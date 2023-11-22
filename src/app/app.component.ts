import { Component } from '@angular/core';
import { AppParentUser} from './services/parent-user.service';
import { AppChildUser } from './services/user-child.service';

import { ParentUser } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { firstname: 'John', lastname: 'Doe', age: 25 },
    { firstname: 'Jane', lastname: 'Doe', age: 30 },
    { firstname: 'Bob', lastname: 'Smith', age: 18 },
    { firstname: 'Alice', lastname: 'Johnson', age: 22 },
    { firstname: 'Eve', lastname: 'Brown', age: 28 }
  ];
  
  


parentUsers: AppParentUser[] = [
  { Id: 1, Firstname: 'John', Lastname: 'Doe', DateOfBirth: new Date('1990-01-01'), PhoneNumber: '1234567890', Email: 'john@example.com' },
  // Add more AppParentUser objects as needed
];

childUsersFromChild: AppChildUser[] = [];

receiveChildData(childData: AppChildUser[]) {
  this.childUsersFromChild = childData;
}
}
