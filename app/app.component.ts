import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { NgModel} from '@angular/forms';
  
@Component({
    selector: 'get-elements-app',
    template: `<div>
                    <h1>Gists</h1>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent { }