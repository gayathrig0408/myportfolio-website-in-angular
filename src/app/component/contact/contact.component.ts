import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private titleService: Title, private projectService: ProjectsService) {
      this.titleService.setTitle('Gayathri - Contact')
    }

}
