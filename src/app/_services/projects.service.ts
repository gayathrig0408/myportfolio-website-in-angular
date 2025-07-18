import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   projects: Project[] = [
   {id: 0, name: "E-Commerce", pictures: ["assets/images/ecom.png","assets/images/ecom1.png","assets/images/ecom2.png","assets/images/ecom3.png"], projectLink: "https://github.com/gayathrig0408/Ecommerce_app-using-Angular-with-db.json.git", summary: "A fully responsive E-commerce web application built using Angular that allows users to browse products, add items to a shopping cart, update location, search products, and simulate a full shopping experience with CRUD functionality and routing.", description: "This Angular-based E-commerce website replicates a real-world online shopping experience. It includes modern features like: 🛍️ Product listings with images and prices 🔍 Search functionality 🛒 Add to cart and cart preview  🔐 Login/Signup (UI only or with authentication support) 🔄 Full CRUD operations for products using JSON Server or API 🔗 Angular routing for Home, Skills, Resume, Contact, etc. 📱 Mobile-first responsive UI using Bootstrap. Tech Stack: Angular (v15+), Bootstrap 5 (or Material UI), TypeScript, JSON Server (for mock API), HTML/CSS, 🧠 Features Implemented, Angular Routing (routerLink), Services and HTTP requests, Component-based architecture, Form handling (Reactive or Template-driven), Local state management (cart), Search and filter logic", tags: [Tag.ANGULAR]},
      {id: 1, name: "Tribute Page", pictures: ["../../../assets/images/tribute1.png","../../../assets/images/tribute2.png","../../../assets/images/tribute3.png"], projectLink: "https://github.com/gayathrig0408/tribute-page", summary: "Html project that Tribute to Dr. A.P.J. Abdul Kalam.", description: "A.P.J. Abdul Kalam, in full Avul Pakir Jainulabdeen Abdul Kalam, was born on October 15, 1931, in Rameswaram, Tamil Nadu, India. He served as the 11th President of India from 2002 to 2007.", tags: [Tag.HTML, Tag.CSS]},
      {id: 2, name: "Rock Paper Scissors", pictures: ["../../../assets/images/rps1.png","../../../assets/images/rps2.png"], projectLink: "https://github.com/gayathrig0408/gayathrig0408-Rock-Paper-scissors--using-if-else-in-js/blob/main/07-rock-paper-scissors-functions.html", summary: "Rock-Paper-Scissors project developed using Javascript", description: "The player selects one of the three options: Rock, Paper, or Scissors.The computer randomly selects one of the three options.The game compares the player's choice with the computer's and determines the winner based on the classic rules:Rock beats Scissors Scissors beats Paper Paper beats Rock.The outcome (Win, Lose, or Draw) is displayed to the player.The game keeps track of the player's and computer's scores.Players can reset the game to start a new session.", tags: [Tag.REACT, Tag.HTML, Tag.CSS]},
      {id: 3, name: "Portfolio App", pictures: ["../../../assets/images/portfolio1.png","../../../assets/images/portfolio2.png","../../../assets/images/portfolio3.png", "../../../assets/images/portfolio4.png"], projectLink: "https://github.com/gayathrig0408/myportfolio.git", summary: "Portfolio app developed using Angular", description: "A dynamic, responsive, and modern personal portfolio website. Modular Components: Utilize Angular's component-based architecture to create reusable sections like Home,Skills, Resume and Contact. Routing: Implement Angular Router for smooth navigation between different sections of the portfolio.Responsive Design: Ensure the portfolio is using Bootstrap. Animations: Enhance user experience with Angular animations ", tags: [Tag.ANGULAR]},
      {id: 4, name: "Calculator", pictures: ["assets/images/calculator.png","assets/images/calculator1.png"], projectLink: "https://github.com/gayathrig0408/calculator-js-project.git", summary: "A basic calculator built using HTML, CSS, and JavaScript that performs simple arithmetic operations such as addition, subtraction, multiplication, and division.", description: "This calculator project is a simple web-based application created with vanilla JavaScript. It features a clean and responsive user interface built with HTML and styled using CSS. The calculator can handle basic operations including: Addition (+), Subtraction (−),Multiplication (×),Division (÷),Clear (C),Decimal input,Continuous operations (e.g., 3 + 2 * 4).The logic is written entirely in JavaScript, managing user input, updating the display, and performing real-time calculations. This project is ideal for beginners to understand  event handling, and basic arithmetic logic in JavaScript.", tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]},
      {id: 5, name: "Hungman", pictures: ["assets/images/hungman.png","assets/images/hungman1.png","assets/images/hungman2.png","assets/images/hungman3.png"], projectLink: "https://github.com/gayathrig0408/Hungman-project-in-js.git", summary: "A classic Hangman word guessing game built using HTML, CSS, and vanilla JavaScript, where users guess letters to reveal a hidden word before running out of attempts.", description: "This Hangman project is an interactive browser-based word guessing game implemented with core web technologies (HTML, CSS, and JavaScript). The player must guess the hidden word by entering one letter at a time. With each incorrect guess, a part of the hangman figure is drawn. The game continues until the word is fully guessed or the hangman is completely drawn. Key Features: Random word selection from a predefined list. Dynamic UI updates for correct and incorrect guesses. Visual hangman drawing with each wrong letter. Win/loss detection with restart option. Responsive design and keyboard input handling. This project is great for practicing JavaScript fundamentals like: Event handling, String and array manipulation, DOM manipulation, Conditional logic. It’s a beginner-friendly game that demonstrates how to build interactive applications using plain JavaScript..", tags: [Tag.JAVASCRIPT]},
      {id: 6, name: "Tic-Tac-Toe", pictures: ["assets/images/tictactoe.png","assets/images/tictactoe1.png","assets/images/tictactoe2.png"], projectLink: "https://github.com/gayathrig0408/Tic-Tac-Toe-in-javascript.git", summary: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript, allowing two players to take turns and play on a 3×3 grid with win detection and draw handling.", description: "This web-based Tic-Tac-Toe game is a simple yet interactive implementation of the traditional two-player game. The project uses: HTML to structure the game grid, CSS for styling and responsiveness, JavaScript to handle game logic, turn management, and win/draw conditions🔹 Key Features: 3×3 grid clickable interface, Alternating turns between Player X and Player O Win detection in rows, columns, and diagonals, Draw detection if all boxes are filled without a winner, Restart Game button to reset the board.", tags: [Tag.JAVASCRIPT]},
      {id: 7, name: "Word Scramble", pictures: ["assets/images/wordscramble.png","assets/images/wordscramble1.png"], projectLink: "https://github.com/gayathrig0408/Word-Scramble-usign-js.git", summary: "A fun and interactive Word Scramble game built using HTML, CSS, and JavaScript, where users try to guess the correct word from its scrambled version.", description: "This Word Scramble project is a simple browser-based word game developed using vanilla JavaScript. The game presents a scrambled version of a word and challenges the player to guess the correct word within a limited number of attempts or time (optional feature). Key Features: Random word selection from a predefined list, Words are automatically scrambled using a shuffle algorithm, User input field to enter guesses, Check answer button to validate the guess, Score tracking or feedback on correct/incorrect guesses, Optional: Timer or hint functionality for added challenge.", tags: [Tag.JAVASCRIPT]},
      {id: 8, name: "Currency convertor", pictures: ["assets/images/currency.png","assets/images/currency.png"], projectLink: "https://github.com/gayathrig0408/Currency-convertor-using-react.git", summary: "A user-friendly React-based web application that allows users to convert between different currencies using real-time exchange rates. The app fetches data from a public API and updates the converted amount instantly based on user input.", description: "The Currency Converter is a responsive React application designed to provide real-time currency conversion between various international currencies. Built using functional components and hooks like useState and useEffect, the app fetches live exchange rates from a free currency API such as ExchangeRate-API or Open Exchange Rates. Key features include: ✅ Real-time currency conversion 🌍 Support for multiple currencies 🔄 Automatic rate updates using APIs 📱 Responsive design for mobile and desktop 🎨 Styled using CSS or Bootstrap The project demonstrates the use of API integration, state management, user input handling, and component-based architecture in React.", videoUrl: "assets/images/currencyvideo.mp4" , tags: [Tag.REACT]},
      {id: 9, name: "Weather_App", pictures: ["assets/images/weather.png","assets/images/weather1.png"], projectLink: "https://github.com/gayathrig0408/weather-App-using-react.git", summary: "A dynamic weather forecasting web app built with React that displays real-time weather information for any city using OpenWeatherMap API.", description: "This Weather Forecasting app is a responsive web application developed using React.js. It allows users to search for current weather conditions in any city around the world. By integrating the OpenWeatherMap API, the app fetches and displays real-time weather data including temperature, humidity, wind speed, weather description, and icons. Key Features: 🔍 Search by city name 🌤 Real-time weather updates using API 🌡️ Displays temperature, wind speed, humidity, and condition 🎨 Clean and responsive UI with CSS or Bootstrap 📦 Built with functional components and React Hook. Technologies Used: React.js (with Hooks), OpenWeatherMap API, HTML/CSS or Bootstrap, Axios or Fetch API", tags: [Tag.REACT]},
      
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
