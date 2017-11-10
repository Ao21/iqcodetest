import { module } from 'angular';
import uiRouter from 'angular-ui-router';
const ngRedux = require('ng-redux').default;

// tslint:disable-next-line:no-import-side-effect
import './index.scss';

import { routing } from './config';

import Services from './services/services.module';
import Filters from './core/filters/filters.module';
import Components from './components/components.module';
import Objects from './objects/objects.module';
import Scenes from './scenes/scenes.module';

module('baseApp', [uiRouter, ngRedux, Services, Filters, Components, Objects, Scenes])
	.config(routing);
