import { module } from 'angular';
import ProfileService from './profile.service';

export default module('app.services', [])
	.service('ProfileService', ProfileService).name;
