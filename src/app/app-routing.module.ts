import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { LogoutComponent } from '@shared/components/logout/logout.component';
import { LoginComponent } from '@shared/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'callback', component: OktaCallbackComponent },
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent, pathMatch: "full" },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'providerattributes',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8080/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.ProviderListModule)
  },
  { path: '**', redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
