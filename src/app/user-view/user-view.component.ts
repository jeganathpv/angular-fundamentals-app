import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../base.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit, OnChanges {

  @Input() userId: number = 0;

  userDetail: User | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.registerSubscribers();
  }

  registerSubscribers() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.userId = +params['userId'];
      this.userDetail = this.userService.getUserDetail(this.userId);
    })
  }

  ngOnChanges(){
    this.userDetail = this.userService.getUserDetail(this.userId);
  }
}
