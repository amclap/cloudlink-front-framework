import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/shared/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'cloudlink', pathMatch: 'full' },
  { path: 'demo', redirectTo: 'demo/dashboard' },
  { path: '**', redirectTo: 'cloudlink/dashboard' }
];
export const routing = RouterModule.forRoot(routes, { useHash: true });
