import { Component, OnInit } from '@angular/core';
import { faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import { faAngular,faHtml5,faCss3Alt,faJsSquare, faJava, faNode, faNpm, faGitAlt,faSass} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss','../about-me/about-me.component.scss']
})
export class TechnologiesComponent implements OnInit {

  userGraduateIcon = faUserGraduate;

  angularIcon = faAngular;
  htmlIcon = faHtml5;
  cssIcon = faCss3Alt;
  javaScriptIcon = faJsSquare;
  javaIcon = faJava;
  nodeIcon = faNode;
  npmIcon = faNpm;
  gitIcon = faGitAlt;
  sassIcon = faSass;
  
  constructor() { }

  ngOnInit(): void {
  }

}
