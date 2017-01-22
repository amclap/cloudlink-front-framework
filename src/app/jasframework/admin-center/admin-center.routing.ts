import { Routes, RouterModule } from '@angular/router';
import { AdminCenterComponent } from './admin-center.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCenterComponent,
        children: [
            { path: 'platformAdmin', loadChildren: () => System.import('../../jasframework/admin-center/platform-admin/platfrom-admin.module') },
            { path: 'privilegeAdmin', loadChildren: () => System.import('../../jasframework/admin-center/privilege-admin/privilege-admin.module.ts') },
        ]
    }
];
export const AdminCenterRoutes = RouterModule.forChild(routes);
