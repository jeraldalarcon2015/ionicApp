import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

//send unauthorized users to login
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

//Automatically log in users
const redirectLoggedIntoChat = () => redirectLoggedInTo(['/idea']);

const routes: Routes = [
  {
    path: 'ideaList',
    loadChildren: () => import('./pages/idea-list/idea-list.module').then( m => m.IdeaListPageModule),
    // ...canActivate(redirectLoggedIntoChat)
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'idea',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'idea/:id',
    loadChildren: () => import('./pages/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/dash/dash.module').then( m => m.DashPageModule)
  },

  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./pages/dashboard.module').then(m => m.DashboardPageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
