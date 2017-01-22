import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MonitorCenter } from './monitor-center.model';

@Injectable()
export class MonitorCenterService {

	constructor(private http: Http) { }

	getList(): Observable<MonitorCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as MonitorCenter[]);
	}
}