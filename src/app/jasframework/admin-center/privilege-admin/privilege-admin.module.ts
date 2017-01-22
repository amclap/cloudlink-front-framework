import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PrivilegeAdminComponent } from './privilege-admin.component';
import { PrivilegeAdminRoutes } from './privilege-admin.routing';
import { TenantAdminComponent } from './tenant-admin/tenant-admin.component';
import { EnterpriseAdminComponent } from './enterprise-admin/enterprise-admin.component';
import { OrgAdminComponent } from './org-admin/org-admin.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { RoleAdminComponent } from './role-admin/role-admin.component';
import { FunctionPrivilegeComponent } from './function-privilege/function-privilege.component';
@NgModule({
    imports: [
        CommonModule,
        AngularFormsModule,
        NgaModule,
        PrivilegeAdminRoutes,
        RatingModule,
        ReactiveFormsModule
    ],
    declarations: [
        PrivilegeAdminComponent,
        TenantAdminComponent,
        EnterpriseAdminComponent,
        OrgAdminComponent,
        UserAdminComponent,
        RoleAdminComponent,
        FunctionPrivilegeComponent
    ],
    providers: [
    ]
})
export default class PrivilegeAdminModule { }
