import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// useHash para que al desplegar en produccion se eviten problemas de rutas
export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
