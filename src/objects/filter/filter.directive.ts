import { module, IDirective } from 'angular';
import template from './filter.html';
import controller from './filter.controller';

/**
 * Filter Container Object
 */
function filter(): IDirective {
	return {
		restrict: 'E',
		template: template,
		controller: controller,
		controllerAs: 'filter',
	};
}

export default module('objects.filter', []).directive('filter', filter)
	.name;
