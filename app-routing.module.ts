import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard }  from './auth-guard.service';
import {LoginFormComponent} from './login-form/login-form.component';
import {PrivateComponent} from './private/private.component';


const APP_ROUTES: Routes = [
	{path: '', redirectTo:'/login', pathMatch: 'full' },
	{path: 'home', component: PrivateComponent , canActivate: [AuthGuard] },
	{path: 'login', component: LoginFormComponent },
        
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}