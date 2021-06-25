import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-elements-web-part',
  templateUrl: './angular-elements-web-part.component.html',
  styleUrls: ['./angular-elements-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})


export class AngularElementsWebPartComponent implements OnInit {
  @Input() description: string;

  userName: string;

  skills: string[];

  employess: { name: string, technology: string }[];

  isValid = true;

  community: string;

  pnpImageUrl: string;
  ptcImageUrl: string;
  defaultImageUrl: string;

  user: {
    firstName: string;
    lastName: string;
    email?: string;
  }
  constructor() {

    this.userName = "Chandani Prajapati";

    this.community = "Pune Tech Community";

    this.skills = ['Angular', 'SPFx', 'Power Automate'];

    this.pnpImageUrl = "../assets/pnp.png";
    this.ptcImageUrl = "../assets/PTC.jpg";
    this.defaultImageUrl = "../assets/Mario.png";

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }

    this.employess = [
      {
        "name": "Chandani",
        "technology": "SharePoint"
      },
      {
        "name": "Ankit",
        "technology": "React"
      }
    ]
  }

  addSkill(skill: string) {
    this.skills.push(skill)
  }

  ngOnInit() {

  }

}
