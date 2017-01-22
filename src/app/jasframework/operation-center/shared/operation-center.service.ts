import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OperationCenter } from './operation-center.model';

@Injectable()
export class OperationCenterService {

	constructor(private http: Http) { }

	getList(): Observable<OperationCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as OperationCenter[]);
	}
}