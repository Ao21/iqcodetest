import { module, IDirective } from 'angular';
import template from './search.html';
import controller from './search.controller';

/**
 * Search Container Object
 */
function searchNav(): IDirective {
	return {
		restrict: 'E',
		scope: {},
		controller: controller,
		controllerAs: 'search',
		template: template,
	};
}

export default module('objects.searchNav', []).directive('searchNav', searchNav)
	.name;
