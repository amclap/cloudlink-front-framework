import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PlatformAdmin } from './platform-admin.model';

@Injectable()
export class PlatformAdminService {

	constructor(private http: Http) { }

	getList(): Observable<PlatformAdmin[]> {
		return this.http.get('/api/list').map(res => res.json() as PlatformAdmin[]);
	}
}