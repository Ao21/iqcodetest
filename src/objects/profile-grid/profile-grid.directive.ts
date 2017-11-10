import { module, IDirective } from 'angular';
import template from './profile-grid.html';
import controller from './profile-grid.controller';

/**
 * Profile Grid Object
 */
function profileGrid(): IDirective {
	return {
		restrict: 'E',
		scope: {},
		controller: controller,
		controllerAs: 'profileGrid',
		template: template,
	};
}

export default module('objects.profileGrid', []).directive(
	'profileGrid',
	profileGrid,
).name;
