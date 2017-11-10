import { module, IDirective } from 'angular';
import template from './page-nav.html';

/**
 * Page Navigation Object
 */
function pageNav(): IDirective {
	return {
		restrict: 'E',
		scope: {},
		template: template,
	};
}

export default module('objects.pageNav', []).directive('pageNav', pageNav).name;
