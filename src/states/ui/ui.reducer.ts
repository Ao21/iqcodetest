import {
	TOGGLE_SEARCH,
	SEARCH_FILTER,
	ALPHABET_FILTER,
	SELECT_PROFILE,
} from '../action-types';
import { AnyAction } from 'redux';
import { findIndex } from 'lodash';

import { State } from './ui.schema';

const initialState: State = {
	searchVisible: false,
	searchFilter: '',
	alphabetFilter: '',
	selectedProfiles: [],
};

export const uiReducer = (state = initialState, action: AnyAction): State => {
	switch (action.type) {
		case SELECT_PROFILE:
			const profile = findIndex(
				state.selectedProfiles,
				item => item === action.index,
			);

			const profiles = [...state.selectedProfiles];
			if (profile !== -1) {
				profiles.splice(profile, 1);
			} else {
				profiles.push(action.index);
			}

			return { ...state, selectedProfiles: profiles };

		case ALPHABET_FILTER:
			return { ...state, alphabetFilter: action.letter, selectedProfiles: [] };
		case TOGGLE_SEARCH:
			return { ...state, searchVisible: !state.searchVisible };
		case SEARCH_FILTER:
			return { ...state, searchFilter: action.filter, selectedProfiles: [] };
		default:
			return state;
	}
};
