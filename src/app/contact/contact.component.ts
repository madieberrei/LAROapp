import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@ViewChild('f') signupForm: NgForm;
message='';
name='';

user = {
  name: '',
  email: '',
  message: ''
};
submitted = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.email;
    this.user.message = this.signupForm.value.message;
  }

}
