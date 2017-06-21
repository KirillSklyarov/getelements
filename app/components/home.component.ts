import { Component, OnInit } from '@angular/core'
import { Response } from '@angular/http'
import { HttpService } from './../services/http.service'
import { Owner } from './../gist/owner'
import { Gist } from './../gist/gist'

@Component({
  selector: 'home-app',
  templateUrl: `../../pages/home.html`,
  styles: [`.anonimous{color:gray;}`],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  gists: Gist[] = []

  constructor (private httpService: HttpService) { }

  ngOnInit () {
    this.httpService.getData('/gists/public').subscribe((data: Response) => {
      let rawGists: JSON[] = data.json()
      let owner: Owner
      for (let i = 0; i < rawGists.length; i++) {
        this.gists[i] = new Gist()

        this.gists[i]['url'] = rawGists[i]['url']
        this.gists[i]['forksUrl'] = rawGists[i]['forks_url']
        this.gists[i]['commitsUrl'] = rawGists[i]['commits_url']
        this.gists[i]['id'] = rawGists[i]['id']
        this.gists[i]['description'] = rawGists[i]['description']
        this.gists[i]['public'] = rawGists[i]['public']
        this.gists[i]['user'] = rawGists[i]['user']
        this.gists[i]['files'] = rawGists[i]['files']
        this.gists[i]['truncated'] = rawGists[i]['truncated']
        this.gists[i]['comments'] = rawGists[i]['comments']
        this.gists[i]['commentsUrl'] = rawGists[i]['comments_url']
        this.gists[i]['htmlUrl'] = rawGists[i]['html_url']
        this.gists[i]['gitPullUrl'] = rawGists[i]['git_pull_url']
        this.gists[i]['gitPushUrl'] = rawGists[i]['git_push_url']
        this.gists[i]['createdAt'] = rawGists[i]['created_at']
        this.gists[i]['updatedAt'] = rawGists[i]['updated_at']

        if ('owner' in rawGists[i]) {
          this.gists[i]['owner'] = new Owner()
          for (let propRawOwner in rawGists[i]['owner']) {
            this.gists[i]['owner'][propRawOwner] =
            rawGists[i]['owner'][propRawOwner]
          }
        }
      }
    })
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

}
