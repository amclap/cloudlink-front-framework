import { Routes, RouterModule } from '@angular/router';

import { PlatformAdminComponent } from './platform-admin.component';
import { SystemAdminComponent } from './system-admin/system-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { FunctionOperationComponent } from './function-operation/function-operation.component';
const routes: Routes = [
    {
        path: '',
        component: PlatformAdminComponent,
        children: [
            { path: 'systemAdmin', component: SystemAdminComponent },
            { path: 'menuAdmin', component: MenuAdminComponent },
            { path: 'dictionary', component: DictionaryComponent },
            { path: 'functionOperation', component: FunctionOperationComponent },
        ]
    }
];

export const PlatformAdminRoutes = RouterModule.forChild(routes);
