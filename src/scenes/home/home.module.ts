import { module } from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

export default module('app.home', [uirouter])
	.config(routing)
	.controller('HomeController', HomeController).name;
