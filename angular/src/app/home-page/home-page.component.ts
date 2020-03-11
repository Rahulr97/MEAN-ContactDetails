import { Component, OnInit, Input } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private newService: ContactServiceService) { }
@Input() Repdata;
myData;
navigateData;
@Input() Id;
  ngOnInit() {
      this.myData =  this.newService.getMyData().subscribe(data => {
      this.Repdata = data;
      console.log(this.navigateData);
      });
  }

  getDetails(value) {

    this.Id  = value;
    this.newService.getDetails(value)
    
  }

}
