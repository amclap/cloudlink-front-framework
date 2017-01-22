import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OrgAdmin } from './org-admin.model';

@Injectable()
export class OrgAdminService {

	constructor(private http: Http) { }

	getList(): Observable<OrgAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as OrgAdmin[]);
	}
}