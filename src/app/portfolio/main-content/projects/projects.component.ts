import { Component, OnInit } from '@angular/core';
import{ Project} from '../../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss','../about-me/about-me.component.scss']
})
export class ProjectsComponent implements OnInit {


  projects:Project[]=new Array<Project>(3);
  numbers:number[]=new Array<number>(3);
  projectExample={} as Project;

  constructor() { }

  ngOnInit(): void {
    
    this.projectExample.name = "Restaurant service app";
    this.projectExample.description ="App designed for restaurant service. It helps with organisation in restaurant for employees and also manager. Manager can for example check statistics of salary in his restaurant. Waiter can book tables and create orders.";
    this.projectExample.photos=["neon.png",""];
    this.projectExample.link="https://github.com/mateuszKrawczak/kpz-restaurant-frontend";
    this.projects[0]=this.projectExample;
    this.projects[1]={name:"Easy quisy",description:"This is a quiz app which helps you check your real knowledge. Quiz has six categories with three difficulty levels with really tough questions.",photos:["neon.png"],link:"https://github.com/mateuszKrawczak/EducationalApp"};
    this.projects[2]={name:"City site",description:"This is a simple website about London City. On this site you can check famous attractions and monuments or check current weather in London.",photos:["blackWood.png"],link:"https://github.com/mateuszKrawczak/Website"};
    
  }

}
