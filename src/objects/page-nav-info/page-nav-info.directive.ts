import { module, IDirective } from 'angular';
import template from './page-nav-info.html';

/**
 * Page Navigation Object
 */
function pageNavInfo(): IDirective {
	return {
		restrict: 'E',
		scope: {},
		template: template,
	};
}

export default module('objects.pageNavInfo', []).directive('pageNavInfo', pageNavInfo).name;
