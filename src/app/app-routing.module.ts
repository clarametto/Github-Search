import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'home', component: UserComponent },
  // { path: 'home', component: NavbarComponent },
  // { path: 'home', component: NavbarComponent },
  // { path: 'home', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
