import { Component } from 'angular2/angular2';

import template from './footer.html!text';

@Component({
    selector: 'smp-footer',
    template: template,
})
export class FooterComponent {
	currentYear: number;

	constructor() {
		let now = new Date();
		this.currentYear = now.getFullYear();
	}
}
