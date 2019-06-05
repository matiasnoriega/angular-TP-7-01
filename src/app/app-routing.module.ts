import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserslistComponent } from './users/userslist/userslist.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

const routes: Routes = [	
  { path: '', component: UserslistComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false , enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
