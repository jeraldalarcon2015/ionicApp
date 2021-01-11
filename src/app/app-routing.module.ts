import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/idea-list/idea-list.module').then( m => m.IdeaListPageModule)
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'idea',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'idea/:id',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
