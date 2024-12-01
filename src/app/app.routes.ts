import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { OneComponent } from './one/one.component';


export const routes: Routes = [
{
path: 'home',
component: HomeComponent
},
{
        path: 'primero',
        component: PrimeroComponent
        },
        {
        path: 'segundo',
        component: SegundoComponent
        },
        {
        path: 'one',
        component: OneComponent
        },

];
