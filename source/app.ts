import { Component } from 'angular2/angular2';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import template from './app.html!text';

import { CoreComponents } from './components/core/core';
import { DashboardComponent } from './components/dashboard/dashboard';
import { ContactsComponent } from './components/contacts/contacts';
import { ProductionComponent } from './components/production/production';

@RouteConfig([
    { path: '/', component: DashboardComponent, as: 'Productions' },
    { path: '/contacts', component: ContactsComponent, as: 'Contacts' },
	{ path: '/production/...', component: ProductionComponent, as: 'Production' },
])
@Component({
    selector: 'set-manager-pro',
    template: template,
	directives: [ROUTER_DIRECTIVES, CoreComponents],
})
export class AppComponent {
}
