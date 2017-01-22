import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RoleAdmin } from './role-admin.model';

@Injectable()
export class RoleAdminService {

	constructor(private http: Http) { }

	getList(): Observable<RoleAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as RoleAdmin[]);
	}
}