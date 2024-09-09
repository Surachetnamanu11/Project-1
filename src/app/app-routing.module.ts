import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu-1',
    loadChildren: () => import('./menu-1/menu-1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu-2',
    loadChildren: () => import('./menu-2/menu-2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'menu-3',
    loadChildren: () => import('./menu-3/menu-3.module').then( m => m.Menu3PageModule)
  },
  {
    path: 'login-1',
    loadChildren: () => import('./login-1/login-1.module').then( m => m.Login1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
