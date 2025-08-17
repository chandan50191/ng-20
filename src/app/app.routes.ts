import { Routes } from '@angular/router';
import { Master } from './components/master/master';
import { Employee } from './components/employee/employee';
import { Client } from './components/client/client';
import { ClientProject } from './components/client-project/client-project';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './gaurd/auth-guard';
import { ClientComponent } from './components/local-storage-crud-example/client/client';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            {
                path: 'master',
                component: Master
            },
            {
                path: 'employee',
                component: Employee
            },
            {
                path: 'client',
                component: Client
            },
            {
                path: 'client-project',
                component: ClientProject
            },
            {
                path: 'client-crud',
                component: ClientComponent
            }
        ]
    },

];
