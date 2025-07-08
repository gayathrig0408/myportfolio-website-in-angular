import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_models/Project';
import { Tag } from 'src/app/_models/Tag';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent  implements OnInit{

  projects = {} as Project[];
   isCollapsed: boolean = true;

  typescript : boolean = false; 
  angular: boolean = false;
  html: boolean = false;
  css: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  mongodb: boolean = false;
  filtering: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
      this.titleService.setTitle('Gayathri - Skill')
    }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if(this.html) {
      filterTags.push(Tag.HTML)
    }
    if(this.css) {
      filterTags.push(Tag.CSS)
    }
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.react) {
      filterTags.push(Tag.REACT)
    }
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS)
    }
    if(this.python) {
      filterTags.push(Tag.PYTHON)
    }
    if(this.mongodb) {
      filterTags.push(Tag.MONGODB)
    }
    else {
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.python = false;
    this.angular = false;
    this.typescript = false;
    this.html = false;
    this.css = false;
    this.react = false;
    this.nodejs = false;
    this.mongodb = false;
    this.javascript = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();

  }
}
