import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../base.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {


  usersList: Array<User> = [];

  selectedUserId: number = 0;

  showUserCreationComp: boolean = false;

  @Input() showBasedOnGroups: boolean = false;

  searchText: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getAvailableUsers();
    this.registerSubscribers();
  }

  registerSubscribers() {
    this.userService.groupChange$.subscribe((data) => {
      if(this.showBasedOnGroups && data){
        this.usersList = this.userService.getUsersByGroup(data);
      }
    });

    this.userService.userCreationChange$.subscribe((data) => {
      this.showUserCreationComp = data;
      this.usersList = this.userService.getAvailableUsers();
    });
  }

  onUserSelect(user: User){
    if(!user && this.usersList.length > 0){
      this.selectedUserId = this.usersList[0].Id;
    }
    this.selectedUserId = user.Id;
  }

  showUserCreation(){
    this.showUserCreationComp = true;
  }

  updateUser(user: User){
    this.selectedUserId = user.Id;
    this.showUserCreation();
  }

  ngOnDestroy(){
    // this.userService.groupChangeSubject.unsubscribe();
  }

}
