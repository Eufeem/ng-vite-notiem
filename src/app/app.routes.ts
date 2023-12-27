import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }, {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    }, {
        path: 'user',
        loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent)
    }, {
        path: 'role',
        loadComponent: () => import('./pages/role/role.component').then(m => m.RoleComponent)
    }, {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
