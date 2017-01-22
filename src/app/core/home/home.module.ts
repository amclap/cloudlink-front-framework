import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './home.routing';
import { NgaModule } from '../../theme/nga.module';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/auth-guard.service';
@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [HomeComponent],
  providers: [AuthGuard]
})
export class HomeModule {
}
