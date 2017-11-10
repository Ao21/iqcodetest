import { IScope } from 'angular';

export default class FilterAlphabetController {
	public static $inject = ['$scope'];

	public alphabet: string[];
	public selectedIndex: number;

	constructor(private $scope: IScope) {
		this.alphabet = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		];
	}

	choose(letter: string, index: number) {
		this.selectedIndex = index;
		// tslint:disable-next-line:no-string-literal
		this.$scope['data'] = letter;
	}
}
