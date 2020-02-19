import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/template', pathMatch: 'full' },
  { path: 'template', loadChildren: () => import('app/template-module/template.module').then((m) => m.TemplateModule) },
  { path: '**', redirectTo: '/template' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
