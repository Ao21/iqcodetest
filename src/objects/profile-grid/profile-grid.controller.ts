import { IScope } from 'angular';
import { ProfileService, Profile } from '../../services/profile.service';
import { INgRedux } from 'ng-redux';
import { State as UIState } from '../../states/ui/ui.schema';

/**
 * Profile Grid Controller
 *
 * @class ProfileGridController
 *
 * TODO: Move filtering out of HTML into here
 * TODO: Hash the items, so they can be tracked properly
 */
export default class ProfileGridController {
	public static $inject = ['$scope', 'ProfileService', '$ngRedux'];

	profiles: Profile[];

	max: number = 20;

	constructor(
		$scope: IScope,
		profileService: ProfileService,
		$ngRedux: INgRedux,
	) {

		const unsubscribe = $ngRedux.connect(this.mapState, {})(this);
		$scope.$on('$destroy', unsubscribe);

		profileService.all().then((results: Profile[]) => {
			this.profiles = results;
			$scope.$apply();
		});
	}

	mapState(state: UIState) {
		const { alphabetFilter, searchFilter, selectedProfiles } = state;
		return {
			alphabetFilter,
			searchFilter,
			selectedProfiles,
		};
	}

	loadMore() {
		this.max = this.max + 20;
	}
}
