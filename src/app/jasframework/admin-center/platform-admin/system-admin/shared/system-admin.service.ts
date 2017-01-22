import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SystemAdmin } from './system-admin.model';

@Injectable()
export class SystemAdminService {

	constructor(private http: Http) { }

	getList(): Observable<SystemAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as SystemAdmin[]);
	}
}