import { Component, OnInit } from '@angular/core'
import { Response } from '@angular/http'
import { HttpService } from './../services/http.service'
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
    this.httpService.getData('/gists/public').subscribe((data: Response) =>
      this.gists = data.json())
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
