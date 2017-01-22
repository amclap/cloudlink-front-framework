import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserAdmin } from './user-admin.model';

@Injectable()
export class UserAdminService {

	constructor(private http: Http) { }

	getList(): Observable<UserAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as UserAdmin[]);
	}
}