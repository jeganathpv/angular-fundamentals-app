import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import { GroupsComponent } from './groups/groups.component';
import { ShowGroupsComponent } from './show-groups/show-groups.component';
import { FilterPipe } from './shared/filter.pipe';
import { SearchHighlightDirective } from './shared/search-highlight.directive';
import { UserCreationComponent } from './user-creation/user-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    UsersListComponent,
    ContactComponent,
    SettingsComponent,
    UserViewComponent,
    ShowErrorComponent,
    GroupsComponent,
    ShowGroupsComponent,
    FilterPipe,
    SearchHighlightDirective,
    UserCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
