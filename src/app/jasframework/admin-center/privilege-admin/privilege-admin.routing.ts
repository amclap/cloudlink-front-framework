import { Routes, RouterModule } from '@angular/router';

import { PrivilegeAdminComponent } from './privilege-admin.component';
import { TenantAdminComponent } from './tenant-admin/tenant-admin.component';
import { EnterpriseAdminComponent } from './enterprise-admin/enterprise-admin.component';
import { OrgAdminComponent } from './org-admin/org-admin.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { RoleAdminComponent } from './role-admin/role-admin.component';
import { FunctionPrivilegeComponent } from './function-privilege/function-privilege.component';
const routes: Routes = [
    {
        path: '',
        component: PrivilegeAdminComponent,
        children: [
            { path: 'tenantAdmin', component: TenantAdminComponent },
            { path: 'enterpriseAdmin', component: EnterpriseAdminComponent },
            { path: 'orgAdmin', component: OrgAdminComponent },
            { path: 'userAdmin', component: UserAdminComponent },
            { path: 'roleAdmin', component: RoleAdminComponent },
            { path: 'functionPrivilege', component: FunctionPrivilegeComponent },
        ]
    }
];

export const PrivilegeAdminRoutes = RouterModule.forChild(routes);
