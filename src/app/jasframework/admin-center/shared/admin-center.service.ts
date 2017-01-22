import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AdminCenter } from './admin-center.model';

@Injectable()
export class AdminCenterService {

	constructor(private http: Http) { }

	getList(): Observable<AdminCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as AdminCenter[]);
	}
}