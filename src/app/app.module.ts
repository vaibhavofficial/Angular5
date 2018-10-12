import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { UserServiceService } from './user-service/user-service.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const appRoutes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'main', component: AppComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
