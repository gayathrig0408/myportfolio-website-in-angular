import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SkillComponent } from './component/skill/skill.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'skill', component:SkillComponent},
  { path:'resume', component:ResumeComponent},
  { path:'contact', component:ContactComponent},
  { path:'**', component:HomeComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
