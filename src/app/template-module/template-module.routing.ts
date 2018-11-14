import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModuleComponent } from './template-module.component';

const TEMPLATE_MODULE_ROUTES: Routes = [
  {
    path: '',
    component: TemplateModuleComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(TEMPLATE_MODULE_ROUTES)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
