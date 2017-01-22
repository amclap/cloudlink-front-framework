import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DocumentCenter } from './document-center.model';

@Injectable()
export class DocumentCenterService {

	constructor(private http: Http) { }

	getList(): Observable<DocumentCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as DocumentCenter[]);
	}
}