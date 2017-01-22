import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/auth-guard.service';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('../login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('../register/register.module')
  },
  {
    path: 'cloudlink',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module'), canLoad: [AuthGuard] },
      { path: 'personalCenter', loadChildren: () => System.import('../../jasframework/personal-center/personal-center.module.ts'), canLoad: [AuthGuard] },
      { path: 'productCenter', loadChildren: () => System.import('../../jasframework/product-center/product-center.module.ts'), canLoad: [AuthGuard] },
      { path: 'adminCenter', loadChildren: () => System.import('../../jasframework/admin-center/admin-center.module.ts'), canLoad: [AuthGuard] },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
