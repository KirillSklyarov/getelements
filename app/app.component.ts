import { Component} from '@angular/core';
  
@Component({
    selector: 'get-elements-app',
    template: `<div>
                    <h3>Info about gists</h3>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}