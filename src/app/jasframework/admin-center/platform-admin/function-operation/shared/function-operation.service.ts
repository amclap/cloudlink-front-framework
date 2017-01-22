import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FunctionOperation } from './function-operation.model';

@Injectable()
export class FunctionOperationService {

	constructor(private http: Http) { }

	getList(): Observable<FunctionOperation[]> {
		return this.http.get('/api/list').map(res => res.json() as FunctionOperation[]);
	}
}