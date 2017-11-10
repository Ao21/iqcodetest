import * as angular from 'angular';
// tslint:disable-next-line:no-import-side-effect
import 'angular-mocks';
import FilterAlphabet from './filter-alphabet.directive';

describe('Directive: FilterAlphabet', () => {
	let compile: any, scope: any, directiveElem: any;

	beforeEach(() => {
		angular.mock.module(FilterAlphabet);

		inject(($compile: any, $rootScope: any) => {
			compile = $compile;
			scope = $rootScope.$new();
		});

		directiveElem = getCompiledElement();
	});

	function getCompiledElement() {
		const element = angular.element('<filter-alphabet></filter-alphabet>');
		const compiledElement = compile(element)(scope);
		scope.$digest();
		return compiledElement;
	}

	it('should exist', () => {
		expect(directiveElem).toBeDefined();
	});
});