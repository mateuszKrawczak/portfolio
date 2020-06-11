import { Component, OnInit } from '@angular/core';
import{faFacebookF, faLinkedinIn,faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss','../about-me/about-me.component.scss']
})
export class ContactComponent implements OnInit {

  iconFacebook = faFacebookF;
  iconLinkedin = faLinkedinIn;
  iconGithub = faGithub;
  iconInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
