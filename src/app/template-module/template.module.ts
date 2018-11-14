import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedModule } from '../shared/app-shared.module';
import { TemplateModuleComponent } from './template-module.component';
import { TemplateRoutingModule } from './template-module.routing';

@NgModule({
  imports: [CommonModule, AppSharedModule, TemplateRoutingModule],
  declarations: [TemplateModuleComponent],
  providers: [],
})
export class TemplateModule {}
