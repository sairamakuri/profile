import { Component, OnInit, Injectable, Input } from '@angular/core';
import { defaultDeclarations } from '../declarations';
import { aboutService,technicalService,projectListService,projectDetailService } from '../variableConfigurations';
import { aboutDetails, technicalDetails, ProjectListDetails, projectDescriptionDetail } from '../variableDeclarations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { UsersDataService } from '../users-data.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	aboutArray:any;
	constructor(private http: HttpClient, private usersDataService: UsersDataService, private router: Router) {}

	ngOnInit(){
		if(this.usersDataService.userId){
			//alert("If");
			//this.http.get(this.usersDataService.configUrl+'?id='+this.usersDataService.userId)
			this.http.post(this.usersDataService.configUrl,{'id' : this.usersDataService.userId})
			.subscribe(result => {
				this.aboutArray = result['about'];
				this.usersDataService.userId = this.usersDataService.userId;
				this.usersDataService.headerArr = result['about'];
				this.router.navigate(['/about']);
			});
		}else{
			this.usersDataService.userId = null;
			this.usersDataService.headerArr = null;
			this.http.post(this.usersDataService.configUrl,{'id' : this.usersDataService.userId})
			.subscribe(result => {
			  this.aboutArray = result['about'];
			  console.log(result['about']);
			  //console.log(result.text());
			  //this.router.navigate(['/home']);
			});
		}
	}

	onSelect(aboutId): void {
		localStorage.setItem('userId', btoa(aboutId));
		//alert(localStorage.getItem('userId'));
		//this.http.get(this.usersDataService.configUrl+'?id='+aboutId+'&encry='+localStorage.getItem('userId'))
		this.http.post(this.usersDataService.configUrl,{'id' : aboutId})
		.subscribe(result => {
			this.aboutArray = result['about'];
			this.usersDataService.userId = aboutId;
			this.usersDataService.headerArr = result['about'];
			this.router.navigate(['/about']);
		});
	}

}
