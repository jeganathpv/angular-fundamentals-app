import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './base.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: Array<User> = [];


  groupChangeSubject = new Subject<string>();
  groupChange$: Observable<string> = this.groupChangeSubject.asObservable();

  userCreationChangeSubject = new Subject<boolean>();
  userCreationChange$: Observable<boolean> = this.userCreationChangeSubject.asObservable();
  
  constructor() {
    this.initUserList();
   }


  initUserList() {
    this.usersList = [
      {
        Id: 1,
        Name: 'Jaddu',
        Email: 'jaddu@gmail.com',
        Age: 22,
        IsActive: true,
        Address: 'Tvl',
        Group: 'A'
      },
      {
        Id: 2,
        Name: 'Jegan',
        Email: 'jegan@gmail.com',
        Age: 22,
        IsActive: true,
        Address: 'Tvl',
        Group: 'A'
      },
      {
        Id: 3,
        Name: 'Virat',
        Email: 'virat@gmail.com',
        Age: 35,
        IsActive: true,
        Address: 'Banglore',
        Group: 'B'
      },
      {
        Id: 4,
        Name: 'Rahul',
        Email: 'rahul.kl@gmail.com',
        Age: 31,
        IsActive: true,
        Address: 'Punjab',
        Group: 'B'
      },
      {
        Id: 5,
        Name: 'Dhoni',
        Email: 'msd@gmail.com',
        Age: 42,
        IsActive: true,
        Address: 'Chennai',
        Group: 'C'
      },
      {
        Id: 6,
        Name: 'Sachin',
        Email: 'sachin@gmail.com',
        Age: 42,
        IsActive: true,
        Address: 'Mumbai',
        Group: 'D'
      },
      {
        Id: 7,
        Name: 'Pant',
        Email: 'rpant@gmail.com',
        Age: 29,
        IsActive: true,
        Address: 'Delhi',
        Group: 'B'
      },
      {
        Id: 8,
        Name: 'ABD',
        Email: 'abd@gmail.com',
        Age: 42,
        IsActive: true,
        Address: 'SouthAfrica',
        Group: 'D'
      },
      {
        Id: 9,
        Name: 'FAF',
        Email: 'faf@gmail.com',
        Age: 42,
        IsActive: true,
        Address: 'Chennai',
        Group: 'E'
      }
    ];
  }

  getAvailableUsers(){
    if(this.usersList && this.usersList.length > 0){
      return this.usersList;
    }
    return [];
  }

  getUserDetail(userId: number): User | undefined{
    const index = this.usersList.findIndex(user => user.Id === userId);
    if(index > -1){
      return this.usersList[index];
    }
    return undefined;
  }

  getAvailableGroups(){
    let groups = this.usersList.map(user => user.Group);
    let uniqueGroups: Array<string> = [];
    groups.forEach(group => {
      if(!uniqueGroups.includes(group)){
        uniqueGroups.push(group);
      }
    });
    return uniqueGroups;
  }


  getUsersByGroup(group: string){
    return this.usersList.filter(user => user.Group === group);
  }


  addNewUser(user: User | undefined){
    if(!user){
      return;
    }
    
    let availableUsersCount = this.usersList.length;
    user.Id = availableUsersCount + 1;
    this.usersList.push(user);
  }

  updateUser(user: User | undefined){
    if(!user){
      return;
    }
    
    const index = this.usersList.findIndex(existingUser => existingUser.Id === user.Id);
    this.usersList[index] = user;
  }
}
