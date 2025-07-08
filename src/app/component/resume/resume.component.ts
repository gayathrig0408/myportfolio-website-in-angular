import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isEducationOpen: boolean = false;
  isSkillsOpen: boolean = false;
  isCertificationOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Gayathri - Resume')

}
DownloadFile(){
  const link= this.renderer.createElement('a');
  link.setAttribute('target','_blank');
  link.setAttribute('href','../../../assets/RESUME_GAYATHRI_RAJALAKSHMI.pdf');
  link.click();
  link.remove();
}
}
