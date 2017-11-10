// tslint:disable:no-import-side-effect

import * as angular from 'angular';
import 'angular-mocks';

import { ProfileService } from './profile.service';

describe('Profile Service', () => {
	let $httpBackend: any;
	let $http: any;
	let profileService: ProfileService;

	beforeEach(() => {
		angular.mock.inject(($injector: any) => {
			$httpBackend = $injector.get('$httpBackend');
			$httpBackend
				.whenGET('/data.json')
				.respond({results: {nm: 'ro', vm: 'v0'}});
			$http = $injector.get('$http');
		});
	});

	beforeEach(() => {
		profileService = new ProfileService($http);
	});

	it('be able to load a list of profiles', (done) => {
		profileService
			.all()
			.then(next => {
				expect(next).toEqual({nm: 'ro', vm: 'v0'});
				done();
			});
		$httpBackend.flush();
	});
});
