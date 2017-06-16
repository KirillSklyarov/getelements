import { Component, OnInit, OnDestroy} from '@angular/core';
import { Response} from '@angular/http';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpService} from './http.service';
import { Gist } from './gist/gist';

@Component({
    selector: 'info-app',
    templateUrl: `info.html`,
    providers: [HttpService]
})
export class InfoComponent implements OnInit, OnDestroy { 
    
    gist: Gist;
    private id: string;
    private subscription: Subscription;

    constructor(private httpService: HttpService, private activateRoute: ActivatedRoute){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit(){
        this.httpService.getData('/gists/' + this.id).subscribe((data: Response) => this.gist=data.json());
        alert(this.gist.id);
        
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    /*
    getOwner(gist: Gist): string {
        if ('owner' in gist) {
            return gist.owner.login;
        } else {
            return 'Anonimous';
        }

    }

    isAnonimous(gist: Gist): boolean{
        return !('owner' in gist);
    }

    getDate(dateIso: string): string {
        let date = new Date(dateIso);
        return date.toLocaleString();
    }
    */

}