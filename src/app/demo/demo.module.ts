import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './demo.routing';
import { NgaModule } from '../theme/nga.module';

import { DemoComponent } from './demo.component';
@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [DemoComponent]
})
export class DemoModule {
}
