import { Routes, RouterModule } from '@angular/router';

import { BasicInfoComponent } from './basic-info/basic-info.component';
import { PersonalCenterComponent } from './personal-center.component';
import { PasswordComponent } from './password/password.component';
const routes: Routes = [
    {
        path: '',
        component: PersonalCenterComponent,
        children: [
            { path: 'basicInfo', component: BasicInfoComponent },
            { path: 'password', component: PasswordComponent }
        ]

    }
];

export const PersonalRoutes = RouterModule.forChild(routes);
