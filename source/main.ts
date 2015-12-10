import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import { bootstrap, provide } from 'angular2/angular2';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { AppComponent } from './app';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);