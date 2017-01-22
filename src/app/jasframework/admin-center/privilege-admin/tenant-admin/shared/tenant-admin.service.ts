import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TenantAdmin } from './tenant-admin.model';

@Injectable()
export class TenantAdminService {

	constructor(private http: Http) { }

	getList(): Observable<TenantAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as TenantAdmin[]);
	}
}