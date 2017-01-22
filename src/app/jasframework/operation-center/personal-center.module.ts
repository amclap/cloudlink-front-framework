import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalRoutes } from './personal-center.routing';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        PersonalRoutes,
        RatingModule,
        ReactiveFormsModule
    ],
    declarations: [
        BasicInfoComponent,
        PersonalCenterComponent,
        PasswordComponent
    ],
    providers: [
    ]
})
export default class PersonalCenterModule { }
