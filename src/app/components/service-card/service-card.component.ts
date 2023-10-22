import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
	@Input()
	serviceIcon: string = ""
	@Input()
	title: string = ""
	@Input()
	service: string = ""
}
