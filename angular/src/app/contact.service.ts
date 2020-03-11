import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }

  getContacts(){
    console.log(this.http.get('http://localhost:3000/all'));
    return this.http.get('http://localhost:3000/all');
  }
}
