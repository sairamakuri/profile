import { Component, OnInit } from '@angular/core';
import { defaultDeclarations } from '../declarations';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { aboutService,technicalService,projectListService,projectDetailService } from '../variableConfigurations';
import { aboutDetails, technicalDetails, ProjectListDetails, projectDescriptionDetail } from '../variableDeclarations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { UsersDataService } from '../users-data.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  //ProjectListServiceData = ProjectListDetails;
  //projectDescriptionServiceData = projectDescriptionDetail;
  public ProjectListServiceData : any;
  public projectDescriptionServiceData : any;
  public projectDescriptionDetailDummy : any;
  public projectDescriptionDetail : any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient, 
    private usersDataService: UsersDataService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.projectDescriptionDetailDummy = this.route.params.subscribe(params => {
      this.projectDescriptionDetail = params['pid'];
    });
    if(this.usersDataService.userId){
      this.http.post(this.usersDataService.configUrl,{'id' : this.usersDataService.userId,'pid' : this.projectDescriptionDetail})
      .subscribe(result => {
        this.ProjectListServiceData = result['project'];
        this.projectDescriptionServiceData = result['projectDescription'];
      });
    }else{
      this.router.navigate(['/home']);
    }
  }
  /*
  ngOnInit(){
    if(this.usersDataService.userId){
      this.http.post(this.usersDataService.configUrl,{'id' : this.usersDataService.userId})
      .subscribe(result => {
      this.ProjectListServiceData = result['project'];
      });
    }else{
      this.router.navigate(['/home']);
    }
  }
  */


}
