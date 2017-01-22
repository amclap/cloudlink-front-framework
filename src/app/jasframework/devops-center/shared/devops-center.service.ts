import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DevopsCenter } from './devops-center.model';

@Injectable()
export class DevopsCenterService {

	constructor(private http: Http) { }

	getList(): Observable<DevopsCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as DevopsCenter[]);
	}
}