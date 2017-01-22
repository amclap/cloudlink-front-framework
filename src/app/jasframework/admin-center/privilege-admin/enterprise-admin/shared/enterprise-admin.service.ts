import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { EnterpriseAdmin } from './enterprise-admin.model';

@Injectable()
export class EnterpriseAdminService {

	constructor(private http: Http) { }

	getList(): Observable<EnterpriseAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as EnterpriseAdmin[]);
	}
}