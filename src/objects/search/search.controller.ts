import { State as UIState } from '../../states/ui/ui.schema';
import { INgRedux } from 'ng-redux';
import { IScope } from 'angular';

export default class SearchNavController {
	public static $inject = ['$ngRedux', '$scope'];

	public content: string;
	constructor($ngRedux: INgRedux, $scope: IScope) {
		const unsubscribe = $ngRedux.connect(this.mapState, {})(this);
		$scope.$on('$destroy', unsubscribe);

		this.content = 'content';
	}

	mapState(state: UIState) {
		const { searchVisible } = state;
		return {
			searchVisible,
		};
	}
}
