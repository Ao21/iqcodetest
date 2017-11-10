import { module } from 'angular';
import InputField from './input-field/input-field.directive';
import FilterAlphabet from './filter-alphabet/filter-alphabet.directive';
import Profile from './profile/profile.directive';

export default module('app.components', [InputField, FilterAlphabet, Profile])
	.name;
