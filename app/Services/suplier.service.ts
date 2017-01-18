import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
 
@Injectable()
export class SuplierService {
    
    private _supUrl:string = "http://localhost:8000/api/suplier/";
    constructor(private _http: Http){ }
 
    // getSuplier(){
    //     return this._http.get(this._supUrl).map(res => res.json());
    // }
    // getSuplier(){
    //   return this._http.get('http://localhost:8000/api/suplier/')  
    //   // this._http.get("http://localhost:8000/api/menuharian/")
    //   .toPromise()
    //   .then(res=>res.json());
    // }
    getSuplier(){
      let username : string = 'husain';
      let password : string = 'husen123';
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
      return this._http.get('http://localhost:8000/api/suplier/', {
        headers: headers
      })  
      // this._http.get("http://localhost:8000/api/menuharian/")
      .toPromise()
      .then(res=>res.json());
    }
    // postMenu(nama_menu:string,harga_menu:number,deskripsi_menu:string,foto_menu:string,id_suplier:string){
 
    //     let body = JSON.stringify({"nama_menu":nama_menu,"harga_menu":harga_menu,"id_suplier":id_suplier,"deskripsi_menu":deskripsi_menu,"foto_menu":foto_menu});
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers, method: "post" });
 
    //     return this._http.post("http://localhost:8000/api/menu/", body,options)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }
    postMenu(nama_menu:string,harga_menu:number,deskripsi_menu:string,foto_menu:string,id_suplier:string){
 
        let body = JSON.stringify({"id_suplier":id_suplier,"foto_menu":foto_menu,"harga_menu":harga_menu,"nama_menu":nama_menu,"deskripsi_menu":deskripsi_menu});
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers, method: "post" });
 
        // return this._http.post("http://localhost:8000/api/menu/", body,options)
        //     .map(res => res.json())
        //     .catch(this.handleError);

      let username : string = 'husain';
      let password : string = 'husen123';
      // let options = new RequestOptions({ method: "post" });
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
      headers.append("Content-Type", "application/json");
      let option = new RequestOptions({headers:headers})
      return this._http.post("http://localhost:8000/api/menu/", body, option)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
}