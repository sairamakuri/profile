import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { TechnicalComponent }      from './technical/technical.component';
import { ProjectsComponent }      from './projects/projects.component';
import { DescriptionComponent }      from './description/description.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'technical', component: TechnicalComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'description/:pid', component: DescriptionComponent },  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}