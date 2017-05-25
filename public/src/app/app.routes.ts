import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'new', component: NewComponent },
    { path: 'show/:_id', component: ShowComponent },
    { path: 'edit/:_id', component: EditComponent },
    { path: 'delete/:_id', component: DashboardComponent },

];
export const routing = RouterModule.forRoot(APP_ROUTES);
