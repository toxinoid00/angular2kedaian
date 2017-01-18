import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
 
@Injectable()
export class Pelanggan {
    
    private _supUrl:string = "http://localhost:8000/api/pelanggan/";
    constructor(private _http: Http){ }
 
    getPelanggan(){
        return this._http.get(this._supUrl).map(res => res.json());
    }
    postPelanggan(nama_pelanggan:string,no_hp_pelanggan:string, keterangan_lokasi:string, id_gedung:string ){
 
        let body = JSON.stringify({ "nama_pelanggan":nama_pelanggan,"no_hp_pelanggan":no_hp_pelanggan, "keterangan_lokasi":keterangan_lokasi, "id_gedung":id_gedung});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
 
        return this._http.post(this._supUrl, body,options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
}