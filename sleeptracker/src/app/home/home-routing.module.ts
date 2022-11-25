import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
          }
        ],
      },
      {
        path: 'sleep',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/sleep/sleep.module').then( m => m.SleepPageModule)
          }
        ],
      },
      {
        path: 'sleepiness',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/sleepiness/sleepiness.module').then( m => m.SleepinessPageModule)
          }
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
