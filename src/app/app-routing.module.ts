import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserGuard } from './user.guard';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UsersListComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: ':userId',
        component: UserViewComponent
      }
    ]
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ShowErrorComponent
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
