import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PlatformAdminComponent } from './platform-admin.component';
import { PlatformAdminRoutes } from './platform-admin.routing';
import { SystemAdminComponent } from './system-admin/system-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { FunctionOperationComponent } from './function-operation/function-operation.component';
@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        PlatformAdminRoutes,
        RatingModule,
        ReactiveFormsModule
    ],
    declarations: [
        PlatformAdminComponent,
        SystemAdminComponent,
        MenuAdminComponent,
        DictionaryComponent,
        FunctionOperationComponent
    ],
    providers: [
    ]
})
export default class PlatformAdminModule { }
