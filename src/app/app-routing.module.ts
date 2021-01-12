import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { SearchPeopleComponent } from './search-people/search-people.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/registro', component: RegistroComponent },
  { path: 'mapa', component: MapComponent },
  { path: 'people/list-people', component: PeopleListComponent },
  { path: 'people/add', component: CreatePeopleComponent },
  { path: 'people/findbyid', component: SearchPeopleComponent },
  { path: 'ciudades', component: CiudadesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
