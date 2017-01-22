import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { RatingModule, Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalRoutes } from './personal-center.routing';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';
import { ButtonModule, CalendarModule, TabViewModule, ToolbarModule, DialogModule } from 'primeng/primeng';
import { AgGridModule } from 'ag-grid-ng2/main';
@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        PersonalRoutes,
        RatingModule,
        ReactiveFormsModule,
        ButtonModule,
        CalendarModule,
        TabViewModule,
        ToolbarModule,
        Ng2BootstrapModule,
        Ng2SmartTableModule,
        DialogModule,
        AgGridModule.withComponents([BasicInfoComponent])
    ],
    declarations: [
        BasicInfoComponent,
        PersonalCenterComponent,
        PasswordComponent,

    ],
    providers: [
    ],
    schemas: []
})
export default class PersonalCenterModule { }
