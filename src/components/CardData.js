import starwars from "../Images/starwars-min.jpg";
import portfolio from "../Images/portfolio-min.jpg";
import krainaindyka from "../Images/krainaindyka-min.jpg";
import solarsystem from "../Images/solarsystem-min.jpg";
import dragonball from "../Images/dragonball-min.jpg";
import bggenerator from "../Images/bggenerator-min.jpg";
import imagerecognition from "../Images/imagerecognition.JPG";
import tinyone from "../Images/tinyone.JPG";
import codingchallenge11 from "../Images/codingchallenge11.JPG";

const CardData = [
  {
    id: 1,
    primaryColor: "211, 20, 20",
    neonColor: "211, 80, 80",
    projectImg: starwars,
    technologies: ["html", "css", "js", "react"],
    linkPreview: "https://dziukers.github.io/Star-Wars-App/",
    linkCode: "https://github.com/dziukers/Star-Wars-App",
    title: "Star Wars InstaSearch",
    info: [
      "ReactJS",
      "AJAX",
      "STAR WARS API",
      "ES6+",
      "CSS animations",
      "JSON",
      "npm",
      "RWD"
    ]
  },
  {
    id: 2,
    primaryColor: "21, 160, 210",
    neonColor: "21,220,255",
    projectImg: portfolio,
    technologies: ["html", "css", "js", "react"],
    linkPreview: "https://dziukers.github.io/Portfolio/",
    linkCode: "https://github.com/dziukers/Portfolio",
    title: "Portfolio",
    info: [
      "ReactJS",
      "styled components",
      "React Router v4",
      "React Transition Group v2",
      "CSS animations",
      "ES6+",
      "npm",
      "RWD",
      "Particles.js"
    ]
  },
  {
    id: 3,
    primaryColor: "244, 153, 255",
    neonColor: "239, 112, 255",
    projectImg: codingchallenge11,
    technologies: ["html", "css", "js", 'sass'],
    linkPreview: "https://dziukers.github.io/coding_challenge-11/",
    linkCode: "https://github.com/dziukers/coding_challenge-11",
    title: "Coding Challenge 11",
    info: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Sass",
      "RWD",
      "AOS"
    ]
    
  },
  {
    id: 4,
    primaryColor: "34, 34, 244",
    neonColor: "78, 100, 295",
    projectImg: imagerecognition,
    technologies: ["html", "css", "js", 'react', 'express', 'postgresql'],
    linkPreview: "https://dziukers.github.io/Image-Recognition-App/",
    linkCode: "https://github.com/dziukers/Image-Recognition-App",
    title: "Image Recognition App",
    info: [
      "ReactJS",
      "ExpressJS",
      "PostgreSQL",
      "RESTful API",
      "Unsplash API",
      "Clarifai API",
      "knex.js",
      "ES6+",
      "Heroku",
      "Nodemon",
      "bcrypt",
      "Postman",
      "RWD",
      "Particles.js",
      "AJAX",
      "JSON"
    ]

  },
  {
    id: 5,
    primaryColor: "232, 100, 10",
    neonColor: "232, 155, 39",
    projectImg: solarsystem,
    technologies: ["html", "css", "js"],
    linkPreview: "https://dziukers.github.io/Solar-system/",
    linkCode: "https://github.com/dziukers/Solar-system",
    title: "Animated solar system ",
    info: [
      "HTML5",
      "CSS animations",
      "Vanilla JavaScript"
    ]
  },
  {
    id: 6,
    primaryColor: "164, 66, 244",
    neonColor: "164, 150, 255",
    projectImg: bggenerator,
    technologies: ["html", "css", "js"],
    linkPreview: "https://dziukers.github.io/Gradient-Background-Generator/",
    linkCode: "https://github.com/dziukers/Gradient-Background-Generator",
    title: "Gradient Background Generator",
    info: [
      "HTML5", "CSS3", "Vanilla JavaScript"
    ]
  },
  {
    id: 7,
    primaryColor: "242, 200, 29",
    neonColor: "242, 255, 90",
    projectImg: krainaindyka,
    technologies: ["html", "css"],
    linkPreview: "http://krainaindyka.pl",
    linkCode: "disabled",
    title: "Kraina indyka",
    info: [
      "HTML5",
      "CSS3",
      "FileZilla",
      "SVG animations",
      "Adobe Illustrator",
      "RWD"
    ]
  },
  {
    id: 8,
    primaryColor: "244, 244, 66",
    neonColor: "244, 255, 120",
    projectImg: tinyone,
    technologies: ["html", "css", "js", 'sass'],
    linkPreview: "https://dziukers.github.io/Tinyone/",
    linkCode: "https://github.com/dziukers/Tinyone",
    title: "Tinyone",
    info: [
      "HTML5",
      "CSS3",
      "Adobe Photoshop",
      "PSD to HTML",
      "Gulp",
      "Sass", 
      "AOS"
    ]
  },
  {
    id: 9,
    primaryColor: "20, 209, 99",
    neonColor: "21,255,160",
    projectImg: dragonball,
    technologies: ["html", "css", "js"],
    linkPreview: "https://dziukers.github.io/Dragon-Ball-Radar/",
    linkCode: "https://github.com/dziukers/Dragon-Ball-Radar",
    title: "Dragon Ball Radar Game",
    info: ["HTML5","Vanilla JavaScript", "CSS animations"]
  }
];

export default CardData;
