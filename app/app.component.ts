import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Gist } from './gist/gist';
 
@Component({
    selector: 'get-elements',
    templateUrl: 'template.html',
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    gists: Gist[] = [];

    constructor(private httpService: HttpService){}
     
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: Response) => this.gists=data.json());
    }

    getOwner(gist: Gist): string {
        if ('owner' in gist) {
            return gist.owner.login;
        } else {
            return 'Anonimous';
        }

    }
}