import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/share/person.service';
import { PersonUser } from './person-user';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent  implements OnInit{

  orignalPersonUser : PersonUser = {
    email: '',
    firstname: '',
    lastname: '',
    adress: '',
    city: '',
    zipcode: '',
    country: '',
    phonenumber:'',
    dateofbirth: ''
  }

  personUser : PersonUser =  { ...this.orignalPersonUser};

  subscriptionTypes: Observable<string[]> | undefined;

  constructor(private personService : PersonService) {
  }

  ngOnInit(): void {
    this.subscriptionTypes = this.personService.getSubscriptionTypes();
  }

  onSubmit(formSubscription: NgForm) {
    console.log('in onSubmit: ', formSubscription.valid);

    this.personService.postPersonUser(this.personUser).subscribe({
      next: personUser => {console.log("", personUser)},
      error: err => { console.log("AAAAAAAAAAA") }
    });
  }

}
