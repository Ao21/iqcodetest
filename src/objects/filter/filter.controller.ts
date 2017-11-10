import { IScope } from 'angular';
import { INgRedux } from 'ng-redux';

import { debounce } from 'lodash';

import { setSearchFilter, setAlphabetFilter } from '../../states/ui/ui.actions';

export default class FilterController {
	public static $inject = ['$ngRedux', '$scope'];

	filter: string = '';
	alphabetFilter: string = '';

	constructor(private $ngRedux: INgRedux, private $scope: IScope) {
		const filterWatch = this.createFilterWatch();
		const alphabetFilterWatch = this.createAlphabetFilterWatch();

		$scope.$on('$destroy', filterWatch);
		$scope.$on('$destroy', alphabetFilterWatch);
	}

	createAlphabetFilterWatch() {
		return this.$scope.$watch(() => this.alphabetFilter, this.handleAlphabetFilterWatch);
	}

	handleAlphabetFilterWatch = (letter: string) => {
		this.$ngRedux.dispatch(setAlphabetFilter(letter));
	}
	createFilterWatch() {
		return this.$scope.$watch(() => this.filter, debounce(this.handleFilterWatch, 300));
	}

	handleFilterWatch = (filter: string) => {
		this.$ngRedux.dispatch(setSearchFilter(filter));
	}
}
