import { IHttpService } from 'angular';

export interface Profile {
	nm: string;
	va: string;
}
export class ProfileService {
	public static $inject = ['$http'];

	public data: Profile[];
	private isInit: boolean = false;

	constructor(private $http: IHttpService) {}

	/**
	 * Retrieve all of the profiles
	 * @return Promise
	 */
	all() {
		return new Promise((res, rej) => {
			if (this.isInit) {
				return res(this.data);
			}
			this.$http.get('/data.json').then((next: any) => {
				this.data = next.data.results;
				this.isInit = true;
				res(this.data);
			}).catch(rej);
		});
	}
}

export default ProfileService;
