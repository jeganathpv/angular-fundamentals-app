import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../base.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  @Input() userId: number = 0;

  userDetail: User | undefined;

  submitButtonName: string = "Create User"

  userCreationForm = new FormGroup({
    Id: new FormControl(0),
    Name: new FormControl('', Validators.required),
    Age: new FormControl('', Validators.max(50)),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Address: new FormControl(''),
    Group: new FormControl(''),
    IsActive: new FormControl(true)
  });


  get nameControl(){
    return this.userCreationForm.get('Name');
  }

  get nameHasError(){
    return this.nameControl?.touched && this.nameControl?.errors && this.nameControl?.errors['required'];
  }

  get ageControl(){
    return this.userCreationForm.get('Age');
  }

  get emailControl(){
    return this.userCreationForm.get('Email');
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.setSubmitButtonName();
    this.setValueIfAny();
  }

  setValueIfAny() {
    if(this.userId !== 0){
      this.userDetail = this.userService.getUserDetail(this.userId);
      if(!this.userDetail){
        return;
      }
      this.userCreationForm.setValue(this.userDetail);
    }
  }

  setSubmitButtonName() {
    if(this.userId !== 0){
      this.submitButtonName = "Update User";
    }
  }

  onSubmit(){
    this.userDetail = this.userCreationForm.getRawValue();
    if(this.userId === 0){
      this.userService.addNewUser(this.userDetail);
    }else{
      this.userService.updateUser(this.userDetail);
    }
    this.userService.userCreationChangeSubject.next(false);
  }

  
}
