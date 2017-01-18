import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
 
@Injectable()
export class Gedung {
    
    private _supUrl:string = "http://localhost:8000/api/gedung/";
    constructor(private _http: Http){ }
 
    // getGedung(){
    //     return this._http.get(this._supUrl).map(res => res.json());
    // }
    getGedung(){
      let username : string = 'husain';
      let password : string = 'husen123';
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
      return this._http.get('http://localhost:8000/api/gedung/', {
        headers: headers
      })  
      // this._http.get("http://localhost:8000/api/menuharian/")
      .toPromise()
      .then(res=>res.json());
    }
}