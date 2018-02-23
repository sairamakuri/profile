import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { TechnicalComponent } from './technical/technical.component';
import { ProjectsComponent } from './projects/projects.component';
import { DescriptionComponent } from './description/description.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UsersDataService } from './users-data.service';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    TechnicalComponent,
    ProjectsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, HttpModule,
  ],
  providers: [HttpClientModule, UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }