import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductService } from './product-service.model';

@Injectable()
export class ProductServiceService {

	constructor(private http: Http) { }

	getList(): Observable<ProductService[]> {
		return this.http.get('/api/list').map(res => res.json() as ProductService[]);
	}
}