import { Component, OnInit, OnDestroy } from '@angular/core'
import { Response } from '@angular/http'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'
import { HttpService } from './../services/http.service'
import { Owner } from './../gist/owner'
import { Gist } from './../gist/gist'

@Component({
  selector: 'info-app',
  templateUrl: `../../pages/info.html`,
  styles: [`.anonimous{color:gray;}
    .invisible{display:none;}`],
  providers: [HttpService]
})
export class InfoComponent implements OnInit, OnDestroy {

  gist: Gist = new Gist()

  owner: string
  ownerEditing: boolean = false

  private id: string
  private subscription: Subscription

  constructor (private httpService: HttpService,
    private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params =>
    this.id = params['id'])
  }

  ngOnInit () {
    this.httpService.getData('/gists/' + this.id).
    subscribe((data: Response) => {
      let rawGist: JSON = data.json()
      let owner: Owner

      this.gist['url'] = rawGist['url']
      this.gist['forksUrl'] = rawGist['forks_url']
      this.gist['commitsUrl'] = rawGist['commits_url']
      this.gist['id'] = rawGist['id']
      this.gist['description'] = rawGist['description']
      this.gist['public'] = rawGist['public']
      this.gist['user'] = rawGist['user']
      this.gist['files'] = rawGist['files']
      this.gist['truncated'] = rawGist['truncated']
      this.gist['comments'] = rawGist['comments']
      this.gist['commentsUrl'] = rawGist['comments_url']
      this.gist['htmlUrl'] = rawGist['html_url']
      this.gist['gitPullUrl'] = rawGist['git_pull_url']
      this.gist['gitPushUrl'] = rawGist['git_push_url']
      this.gist['createdAt'] = rawGist['created_at']
      this.gist['updatedAt'] = rawGist['updated_at']

      if ('owner' in rawGist) {
        this.gist['owner'] = new Owner()
        for (let propRawOwner in rawGist['owner']) {
          this.gist['owner'][propRawOwner] =
          rawGist['owner'][propRawOwner]
        }
      }
    })
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  getOwner (gist: Gist): string {
    if ('owner' in gist) {
      return gist.owner.login
    } else {
      return 'Anonimous'
    }
  }

  isAnonimous (gist: Gist): boolean {
    return !('owner' in gist)
  }

  getDate (dateIso: string): string {
    let date = new Date(dateIso)
    return date.toLocaleString()
  }

  hasAvatar (gist: Gist): boolean {
    return (('owner' in gist) && ('avatar_url' in gist.owner))
  }

  getAvatarUrl (gist: Gist): string {
    if (('owner' in gist) && ('avatar_url' in gist.owner)) {
      return gist.owner.avatar_url
    } else {
      return ''
    }
  }

  ownerEdit () {
    if (this.ownerEditing) {
      if (this.isAnonimous(this.gist)) {
        if (this.owner !== 'Anonimous') {
          this.gist.owner = new Owner()
          this.gist.owner.login = this.owner
        }
      } else {
        this.gist.owner.login = this.owner
      }
    } else {
      this.owner = this.getOwner(this.gist)
    }
    this.ownerEditing = !this.ownerEditing
  }

  ownerEscapeEdit () {
    this.ownerEditing = false
  }

}
