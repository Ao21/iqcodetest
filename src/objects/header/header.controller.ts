import { State as UIState } from '../../states/ui/ui.schema';
import { INgRedux } from 'ng-redux';
import { IScope } from 'angular';

import * as actions from '../../states/ui/ui.actions';

export default class HeaderController {
	public static $inject = ['$ngRedux', '$scope'];

	constructor($ngRedux: INgRedux, $scope: IScope) {
		const unsubscribe = $ngRedux.connect(this.mapState, actions)(this);
		$scope.$on('$destroy', unsubscribe);
	}

	mapState(state: UIState) {
		const { searchVisible } = state;
		return {
			searchVisible,
		};
	}
}
