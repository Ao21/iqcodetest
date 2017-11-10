import { module, IDirective } from 'angular';
import template from './filter-alphabet.html';
import controller from './filter-alphabet.controller';

/**
 * Filter Alphabet
 * Creates a component with a list of selectable letters
 */
function filterAlphabet(): IDirective {
	return {
		restrict: 'E',
		template: template,
		controller: controller,
		controllerAs: 'filterAlphabet',
		scope: {
			data: '=',
		},
	};
}

export default module('components.filterAlphabet', []).directive(
	'filterAlphabet',
	filterAlphabet,
).name;
