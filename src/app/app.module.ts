import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserItemComponent } from './components/user/user-item/user-item.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserItemComponent,
    UserListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
