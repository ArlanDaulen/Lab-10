import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { DashboardsComponent } from './dashboards/dashboards.component';

@NgModule({
  declarations: [UsersComponent, GroupsComponent, DashboardsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }
