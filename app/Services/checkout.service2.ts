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

    postPesanan(id_pelanggan:string,id_cs:string,jumlah_pesanan:number,id_menu_harian:string,status_pesanan:string,id_kurir:string,waktu_pemesanan:string){
 
        let body = JSON.stringify({"id_pelanggan":id_pelanggan,"id_cs":id_cs,"jumlah_pesanan":jumlah_pesanan,"id_menu_harian":id_menu_harian,"status_pesanan":status_pesanan,"id_kurir":id_kurir,"waktu_pemesanan":waktu_pemesanan});
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
      return this._http.post("http://localhost:8000/api/pesanan/", body, option)
            .map(res => res.json())
            .catch(this.handleError);
    }
}
