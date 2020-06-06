import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])
  handleScroll(e){
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('.show-navbar');
    } else {
      element.classList.add('.show-navbar');
    }
  
  }
}
