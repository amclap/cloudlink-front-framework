import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProductCenterComponent } from './product-center.component';
import { ProductRoutes } from './product-center.routing';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductServiceComponent } from './product-service/product-service.component';

@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        ProductRoutes,
        RatingModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProductAdminComponent,
        ProductCenterComponent,
        ProductServiceComponent
    ],
    providers: [
    ]
})
export default class ProductCenterModule { }
