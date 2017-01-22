import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FunctionPrivilege } from './function-privilege.model';

@Injectable()
export class FunctionPrivilegeService {

	constructor(private http: Http) { }

	getList(): Observable<FunctionPrivilege[]> {
		return this.http.get('/api/list').map(res => res.json() as FunctionPrivilege[]);
	}
}