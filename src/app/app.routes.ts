import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MacaddressComponent } from './components/macaddress/macaddress.component';

export const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  { path: '', component: HomeComponent },
  { path: 'mac', component: MacaddressComponent },
];
