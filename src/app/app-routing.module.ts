import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import{RepositoriesComponent} from './repositories/repositories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
const routes: Routes = [
{ path: 'userprofile', component: UserComponent},
{ path: 'repositories', component: RepositoriesComponent},
{ path: '', redirectTo:"/userprofile", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
