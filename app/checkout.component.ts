/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from 'angular2/core';
import {Pelanggan} from './Services/checkout.service2';
// Our HTTP Component
@Component({
    selector: 'checkout',
    templateUrl: '../app/views/checkout.html',
    providers: [Pelanggan]
 
})
export class Checkout {

    postMyPelanggan;
 
    nama_pelanggan;
    no_hp_pelanggan;
    keterangan_lokasi;
    id_gedung;
    constructor(private _pelangganService:Pelanggan){
 
    }
    postDataToServer(){
        this._pelangganService.postPelanggan(this.nama_pelanggan,this.no_hp_pelanggan, this.keterangan_lokasi, this.id_gedung).subscribe(//call the post
                data => this.postMyPelanggan = JSON.stringify(data), // put the data returned from the server in our variable
                error => alert("Error"),console.log("Error HTTP Post Service"), // in case of failure show this message
                () => alert("Berhasil"),console.log("Job Done Post !")//run this code in all cases
            );
    }
}