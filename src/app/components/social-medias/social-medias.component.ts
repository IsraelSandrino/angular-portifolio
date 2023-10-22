import { Component } from '@angular/core';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent {
	linkedin: string = "https://linkedin.com/in/isandrino";
	instagram: string = "https://www.instagram.com/israelsandrino/"
	gitHub:string = "https://github.com/IsraelSandrino";
  gmail:string = "mailto:isandrino99@gmail.com";
}
