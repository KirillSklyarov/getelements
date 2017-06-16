import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';
import { HttpService }  from './http.service';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { InfoComponent } from './info.component';
 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'info', component: InfoComponent},
];
 
@NgModule({
    imports:      [ HttpModule, BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, InfoComponent],
    bootstrap:    [ AppComponent ], 
    providers [ HttpService ]
})
export class AppModule { }