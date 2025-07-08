import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_models/Project';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Gayathri - Home')
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }

}
