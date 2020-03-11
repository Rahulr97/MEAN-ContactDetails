import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { HomePageComponent } from '../home-page/home-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {

  constructor( private router: Router,
    private newService: ContactServiceService,
    
  ) { }
  Repdata;
  details;
  ngOnInit(): void {
    

    const dataFormService = this.newService.getMyData().subscribe(data => {
      this.Repdata = JSON.stringify(data);
      
      this.details = JSON.parse(this.Repdata).filter(({ID}) => ID === this.newService.detail );
    });
  }
  
  

}
