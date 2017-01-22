import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AdminCenterComponent } from './admin-center.component';
import { AdminCenterRoutes } from './admin-center.routing';
@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        AdminCenterRoutes,
        RatingModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminCenterComponent

    ],
    providers: [
    ]
})
export default class AdminCenterModule { }
