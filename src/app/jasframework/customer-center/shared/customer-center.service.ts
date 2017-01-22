import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CustomerCenter } from './customer-center.model';

@Injectable()
export class CustomerCenterService {

	constructor(private http: Http) { }

	getList(): Observable<CustomerCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as CustomerCenter[]);
	}
}