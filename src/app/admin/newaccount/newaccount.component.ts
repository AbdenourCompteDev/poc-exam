import { Component } from '@angular/core';
import { PersonUser } from './person-user';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent {
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

  personUser : PersonUser = {... this.orignalPersonUser};

}
