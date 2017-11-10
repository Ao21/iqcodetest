import { module } from 'angular';
import { filter } from 'lodash';

/**
 * Filters a list of Profiles by the first letter of their names
 * @param items Profile
 * @param letter string
 */
function letterFilter(items: any[], letter: string) {
	if (!letter || letter === '') {
		return items;
	}
	return filter(items, item => {
		if (item.nm.charAt(0).toUpperCase() === letter) {
			return item;
		}
	});
}

export default module('filter.letter', []).filter(
	'letterFilter',
	() => letterFilter,
).name;
