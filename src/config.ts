import { IUrlRouterProvider } from 'angular-ui-router';
import { ILocationProvider } from 'angular';
import { INgReduxProvider } from 'ng-redux';

// Stores
import { uiReducer } from './states/ui/ui.reducer';

routing.$inject = [
	'$urlRouterProvider',
	'$locationProvider',
	'$ngReduxProvider',
];

export function routing(
	$urlRouterProvider: IUrlRouterProvider,
	$locationProvider: ILocationProvider,
	$ngReduxProvider: INgReduxProvider,
) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$ngReduxProvider.createStoreWith(uiReducer);
}
