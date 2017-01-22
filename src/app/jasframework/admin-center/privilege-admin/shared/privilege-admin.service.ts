import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PrivilegeAdmin } from './privilege-admin.model';

@Injectable()
export class PrivilegeAdminService {

	constructor(private http: Http) { }

	getList(): Observable<PrivilegeAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as PrivilegeAdmin[]);
	}
}