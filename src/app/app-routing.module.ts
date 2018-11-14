import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/template', pathMatch: 'full' },
  { path: 'template', loadChildren: 'app/template-module/template.module#TemplateModule' },
  { path: '**', redirectTo: '/template' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
