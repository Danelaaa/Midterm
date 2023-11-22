import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { service } from '../service.service';
import { AppParentUser } from '../services/parent-user.service';
import { AppChildUser } from '../services/user-child.service';

import { ParentUser } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: ParentUser[] = [];

  constructor(private displayService: service) {}

@Input() parentUsers: AppParentUser[] = [];
@Output() childDataEvent = new EventEmitter<AppChildUser[]>();

childUsers: AppChildUser[] = [
  { Id: 101, Firstname: 'Child', Lastname: 'User', DateOfBirth: new Date('1995-05-05'), PhoneNumber: '9876543210', Email: 'child@example.com' },
  // Add more AppChildUser objects as needed
];

ngOnInit() {
  // Emit the child data to the parent component
  this.childDataEvent.emit(this.childUsers);
}



usersArray: any[] = [
  { Id: 101, Firstname: 'Child', Lastname: 'User', DateOfBirth: new Date('1995-05-05'), PhoneNumber: '9876543210', Email: 'child@example.com' },
];



displayUsers(): void {
  this.displayService.displayArray(this.usersArray);
}
}
