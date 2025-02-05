import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      )
  },

  {
    path: 'home', component: AppComponent,
    children:[

      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(
            (m) => m.HomeModule
          ),
      }  
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
