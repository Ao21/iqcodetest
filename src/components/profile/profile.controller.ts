// import { IScope } from 'angular';
import { INgRedux } from 'ng-redux';

import { selectProfile } from '../../states/ui/ui.actions';

export default class ProfileController {
	public static $inject = ['$ngRedux', '$scope'];

	constructor(private $ngRedux: INgRedux) {}

	checkSelected(index: number, selectedProfiles: number[]) {
		const profile = selectedProfiles.findIndex(item => item === index);
		return profile !== -1 ? true : false;
	}

	toggle(index: number) {
		this.$ngRedux.dispatch(selectProfile(index));
	}
}
