import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonUser } from '../admin/newaccount/person-user';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postPersonUser(personUser: PersonUser): Observable<any>{

    return this.http.post('http://localhost:8080/personne/create',personUser);

    //return of (personUser);
  }
}
