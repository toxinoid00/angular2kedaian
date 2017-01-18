import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
  constructor(private _http:Http){}
    getMenu(){
      return this._http.get("http://localhost:8000/api/menuharian/")
      .map(res=>res.json());
    };

    postJson(nama_suplier:string,alamat_suplier:string){
      var json = JSON.stringify({
        "nama_suplier": nama_suplier,
        "alamat_suplier": alamat_suplier
      });
      var params = json;
      var header = new Headers();
      header.append('Content-type', 'application/json');

      return this._http.post("http://localhost:8000/api/suplier",params, {
        headers:header
      })
      .map(res => res.json());
    };

    getUsersByPromise(){
      let username : string = 'husain';
      let password : string = 'husen123';
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
      return this._http.get('http://localhost:8000/api/menuharian/', {
        headers: headers
      })  
      // this._http.get("http://localhost:8000/api/menuharian/")
      .toPromise()
      .then(res=>res.json());
    }
    // getUsersByPromise2(){
    //   return this._http.get('http://localhost:8000/api/menu/')  
    //   // this._http.get("http://localhost:8000/api/menuharian/")
    //   .toPromise()
    //   .then(res=>res.json());
    // }
     
}
