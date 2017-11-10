import { module, IDirective } from 'angular';
import template from './input-field.html';

/**
 * Input Field
 */
function inputField(): IDirective {
	return {
		restrict: 'E',
		template: template,
		scope: {
			data: '=',
		},
	};
}

export default module('components.inputField', []).directive('inputField', inputField)
	.name;
