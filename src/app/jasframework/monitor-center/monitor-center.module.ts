import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MonitorCenterComponent } from './monitor-center.component.ts';
import { MonitorRoutes } from './monitor-center.routing.ts';
// import { BasicInfoComponent } from './basic-info/basic-info.component';
// import { PasswordComponent } from './password/password.component';

@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        MonitorRoutes,
        RatingModule,
        ReactiveFormsModule
    ],
    declarations: [
        MonitorCenterComponent,
        // PersonalCenterComponent,
        // PasswordComponent
    ],
    providers: [
    ]
})
export default class MonitorCenterModule { }
