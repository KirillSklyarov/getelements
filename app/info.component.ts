import { Component, OnInit, OnDestroy} from '@angular/core';
import { Response} from '@angular/http';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpService} from './http.service';
import { Owner } from './gist/owner';
import { Gist } from './gist/gist';

@Component({
    selector: 'info-app',
    templateUrl: `info.html`,
    styles: [`.anonimous{color:gray;}
            .invisible{display:none;}`],
    providers: [HttpService]
})
export class InfoComponent implements OnInit, OnDestroy { 
    
    gist: Gist = new Gist();

    owner: string;
    ownerEditing: boolean = false;

    private id: string;
    private subscription: Subscription;

    constructor(private httpService: HttpService, private activateRoute: ActivatedRoute){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit(){
        this.httpService.getData('/gists/' + this.id).subscribe((data: Response) => this.gist=data.json());
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

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

    hasAvatar(gist: Gist): boolean {
        return ( ('owner' in gist) && ('avatar_url' in gist.owner) );
    }
    
    getAvatarUrl(gist: Gist): string {
        if ( ('owner' in gist) && ('avatar_url' in gist.owner) ) {
            return gist.owner.avatar_url;
        } else {
            return "";
        }
    }

    ownerEdit() {
        if (this.ownerEditing) {
            if (this.isAnonimous(this.gist)){
                if (this.owner != "Anonimous") {
                    this.gist.owner = new Owner;
                    this.gist.owner.login = this.owner;
                }
            } else {
                this.gist.owner.login = this.owner;
            }
        } else {
            this.owner = this.getOwner(this.gist);
        }
        this.ownerEditing = !this.ownerEditing;
    }

    ownerEscapeEdit() {
        this.ownerEditing = false;
    }

    getDate(dateIso: string): string {
        let date = new Date(dateIso);
        return date.toLocaleString();
    }

}