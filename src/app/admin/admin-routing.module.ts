import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {  path: 'dashboards', component: DashboardsComponent  },
  {  path: 'users', component: UsersComponent  },
  {  path: 'groups', component: GroupsComponent  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
