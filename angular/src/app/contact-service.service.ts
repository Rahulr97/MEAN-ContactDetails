import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private myFile: HttpClient) {

   }
   getMyData() {
  return this.myFile.get('http://localhost:3000/all');
   }

   detail;
   getDetails(value?){
    
    this.detail=value;
    return value;

   }
   
}
