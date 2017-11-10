import {
	TOGGLE_SEARCH,
	SEARCH_FILTER,
	ALPHABET_FILTER,
	SELECT_PROFILE,
} from '../action-types';

/**
 * Sets whether the seach object is visible
 * @param visible boolean
 */
export function toggleSearchVisibility(visible: boolean) {
	return {
		type: TOGGLE_SEARCH,
		visible,
	};
}

/**
 * Sets the string to filter the profiles
 * @param filter string
 */
export function setSearchFilter(filter: string) {
	return {
		type: SEARCH_FILTER,
		filter,
	};
}

/**
 * Sets the letter for the alphabet-filter component
 * @param letter letter
 */
export function setAlphabetFilter(letter: string) {
	return {
		type: ALPHABET_FILTER,
		letter,
	};
}

export function selectProfile(index: number, toggle: boolean = true) {
	return {
		type: SELECT_PROFILE,
		index,
		toggle,
	};
}
