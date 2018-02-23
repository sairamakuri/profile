import { Component, OnInit } from '@angular/core';
import { defaultDeclarations } from '../declarations';
import { aboutService,technicalService,projectListService,projectDetailService } from '../variableConfigurations';
import { aboutDetails, technicalDetails, ProjectListDetails, projectDescriptionDetail } from '../variableDeclarations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { UsersDataService } from '../users-data.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public aboutArray:any;
  constructor(private http: HttpClient, private usersDataService: UsersDataService, private router: Router) {}

  ngOnInit(){
    if(this.usersDataService.userId){
      this.http.post(this.usersDataService.configUrl,{'id' : this.usersDataService.userId})
      .subscribe(result => {
        this.aboutArray = result['about'];
      });
    }else{
      this.router.navigate(['/home']);
    }
  }
}
