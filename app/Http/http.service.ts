import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
  constructor(private _http:Http){}
    getUser(){
      return this._http.get("http://localhost:8000/api/kedai/menu/?format=json")
      .map(res=>res.json());
    };

    postJson(){
      var json = JSON.stringify({
        "nama_suplier": "Husain",
        "alamat_suplier": "Sarijadi"
      });
      var params = json;
      var header = new Headers();
      header.append('Content-type', 'application/json');

      return this._http.post("http://localhost:8000/api/kedai/suplier/",params, {
        headers:header
      })
      .map(res => res.json());
    };

    getUsersByPromise(){
      return this._http.get("http://localhost:8000/api/kedai/menu/?format=json")
      .toPromise()
      .then(res=>res.json());
    }
}
