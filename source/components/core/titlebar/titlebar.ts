import { Component } from 'angular2/angular2';

import { ProfileComponent } from './profile/profile';

import template from './titlebar.html!text'

@Component({
    selector: 'title-bar',
    template: template,
	directives: [ProfileComponent],
})
export class TitleBarComponent {
}
