import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navegacao',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'navegacao',
    loadChildren: () => import('./page/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./page/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./page/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./page/toast/toast.module').then( m => m.ToastPageModule)
  },
  
  {
    path: 'badge',
    loadChildren: () => import('./page/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./page/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./page/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./page/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./page/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
