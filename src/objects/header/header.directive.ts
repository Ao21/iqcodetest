import { module, IDirective } from 'angular';
import controller from './header.controller';
import template from './header.html';

/**
 * Header Object
 */
function Header(): IDirective {
	return {
		restrict: 'E',
		scope: {},
		controller: controller,
		controllerAs: 'header',
		template: template,
	};
}

export default module('objects.topNav', []).directive('topNav', Header).name;
