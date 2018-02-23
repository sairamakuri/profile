import { Component } from '@angular/core';
import { defaultDeclarations } from './declarations';
import { aboutService,technicalService,projectListService,projectDetailService } from './variableConfigurations';
import { aboutDetails, technicalDetails, ProjectListDetails, projectDescriptionDetail } from './variableDeclarations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient } from '@angular/common/http';
import { UsersDataService } from './users-data.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private http: HttpClient, private usersDataService: UsersDataService, private router: Router) {}

	ngOnInit(){
		if(this.usersDataService.userId){
			this.router.navigate(['/about']);
		}else{
			this.router.navigate(['/home']);
		}
	}

	logOut():void{
		this.usersDataService.userId = null;
		this.usersDataService.headerArr = null;
		this.router.navigate(['/home']);
	}
}