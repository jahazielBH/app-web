import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { SearchPeopleComponent } from './search-people/search-people.component';
import { RedisService } from './redis/redis.service';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { GraphQLModule } from './graphql.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    CreatePeopleComponent,
    PeopleListComponent,
    SearchPeopleComponent,
    CiudadesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GraphQLModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders, RedisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
