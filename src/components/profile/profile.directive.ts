import { module, IDirective } from 'angular';
import template from './profile.html';
import controller from './profile.controller';

/**
 * Displays a Profile
 */
function profile(): IDirective {
	return {
		restrict: 'E',
		template: template,
		controller: controller,
		controllerAs: 'profile',
		scope: {
			data: '=',
			index: '=',
			selected: '=',
		},
	};
}

export default module('components.profile', []).directive('profile', profile)
	.name;
