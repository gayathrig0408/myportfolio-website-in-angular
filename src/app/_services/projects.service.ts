import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   projects: Project[] = [
      {id: 0, name: "Tribute Page", pictures: ["../../../assets/images/tribute1.png","../../../assets/images/tribute2.png","../../../assets/images/tribute3.png"], projectLink: "https://github.com/gayathrig0408/tribute-page", summary: "Html project that Tribute to Dr. A.P.J. Abdul Kalam.", description: "A.P.J. Abdul Kalam, in full Avul Pakir Jainulabdeen Abdul Kalam, was born on October 15, 1931, in Rameswaram, Tamil Nadu, India. He served as the 11th President of India from 2002 to 2007.", tags: [Tag.HTML, Tag.CSS]},
      {id: 1, name: "Rock Paper Scissors", pictures: ["../../../assets/images/rps1.png","../../../assets/images/rps2.png"], projectLink: "https://github.com/gayathrig0408/gayathrig0408-Rock-Paper-scissors--using-if-else-in-js/blob/main/07-rock-paper-scissors-functions.html", summary: "Rock-Paper-Scissors project developed using Javascript", description: "The player selects one of the three options: Rock, Paper, or Scissors.The computer randomly selects one of the three options.The game compares the player's choice with the computer's and determines the winner based on the classic rules:Rock beats Scissors Scissors beats Paper Paper beats Rock.The outcome (Win, Lose, or Draw) is displayed to the player.The game keeps track of the player's and computer's scores.Players can reset the game to start a new session.", tags: [Tag.REACT, Tag.HTML, Tag.CSS]},
      {id: 2, name: "Portfolio App", pictures: ["../../../assets/images/portfolio1.png","../../../assets/images/portfolio2.png","../../../assets/images/portfolio3.png", "../../../assets/images/portfolio4.png"], projectLink: "//www.github.com", summary: "Portfolio app developed using Angular", description: "A dynamic, responsive, and modern personal portfolio website. Modular Components: Utilize Angular's component-based architecture to create reusable sections like Home,Skills, Resume and Contact. Routing: Implement Angular Router for smooth navigation between different sections of the portfolio.Responsive Design: Ensure the portfolio is using Bootstrap. Animations: Enhance user experience with Angular animations ", tags: [Tag.ANGULAR]},
      // {id: 3, name: "Web API Project", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.HTML, Tag.CSS]},
      // {id: 4, name: "Chrome Extension", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
      // {id: 5, name: "Mobile App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT]}
    ];
  

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project  {
    let project = this.projects.find(project => project.id ===id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }
  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project){
      let foundAll = true;
      filterTags.forEach(function (filterTag){
        if(project.tags.includes(filterTag)== false){
          foundAll = false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
  
}
