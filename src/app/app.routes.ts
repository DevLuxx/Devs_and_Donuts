import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

export const routes: Routes = [
    { path: 'donuts', component: DonutsComponent },
    { path: 'hall-of-fame', component: FamousPeopleComponent }
];
