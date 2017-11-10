import { IStateProvider } from 'angular-ui-router';
import template from './home.html';

export default function routes($stateProvider: IStateProvider) {
	$stateProvider.state('home', {
		url: '/',
		template: template,
		controller: 'HomeController',
		controllerAs: 'home',
	});
}
