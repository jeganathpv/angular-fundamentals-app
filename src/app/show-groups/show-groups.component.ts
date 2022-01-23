import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-groups',
  templateUrl: './show-groups.component.html',
  styleUrls: ['./show-groups.component.scss']
})
export class ShowGroupsComponent implements OnInit {

  constructor(private userService: UserService) { }

  groups: Array<string> = [];

  ngOnInit(): void {
    this.groups = this.userService.getAvailableGroups();
  }

  onClick(group: string){
    this.userService.groupChangeSubject.next(group);
  }


}
