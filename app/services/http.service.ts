import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
const API_URL = 'https://api.github.com'

@Injectable()
export class HttpService {

  constructor (private http: Http) { }
  getData (query: string) {
    return this.http.get(API_URL + query)
  }
}
