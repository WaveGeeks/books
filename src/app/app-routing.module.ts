import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { AddComponent } from './pages/add/add.component';

export const pageKeys = {
  Overview: 'overview',
  Add: 'add',
};

const routes: Routes = [
  { path: pageKeys.Overview, component: OverviewComponent },
  { path: pageKeys.Add, component: AddComponent },
  { path: '**', redirectTo: pageKeys.Overview }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
