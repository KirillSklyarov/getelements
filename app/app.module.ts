import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';
import { HttpModule }   from '@angular/http';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { InfoComponent } from './info.component';
 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'info', component: InfoComponent},
];
 
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, InfoComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }