import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ContactServiceService } from './contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    
    private router: Router,
    private newService: ContactServiceService){}
  title = 'angular';
  
  ngOnInit(){}
  
}
