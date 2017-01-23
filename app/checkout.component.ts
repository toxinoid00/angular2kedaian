/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from 'angular2/core';
import {Pelanggan} from './Services/pelanggan.service';
import {Gedung} from './Services/gedung.service';
import {FORM_DIRECTIVES, NgIf} from "angular2/common";
import {FilterCatalogItems} from './Utils/Filter.pipe';
import {CartService} from "./Services/cart.service";
import {Item} from "./Models/Menu.model";
// Our HTTP Component

@Component({
    selector: 'checkout',
    templateUrl: '../app/views/checkout.html',
    providers: [Pelanggan, Gedung],
    pipes:[FilterCatalogItems],
    directives:[FORM_DIRECTIVES, NgIf],
})
export class Checkout {
    postMyPelanggan;
    getGedung;
    getPelanggan;
    postMyPesanan;
 
    nama_pelanggan;
    no_hp_pelanggan;
    keterangan_lokasi;
    id_gedung;
    jumlah_pesanan=1;
    // id_menu_harian=1;
    id_cs;
    id_kurir;
    id_pelanggan=146;
    status_pesanan;
    cartItems: Item[] = [];
    waktu_pemesanan;


    constructor(private cartService:CartService, private _pelangganService:Pelanggan, private gedungService:Gedung){
        this.cartItems = cartService.getCart();
    }
    postDataToServer(){
        this._pelangganService.postPelanggan(this.nama_pelanggan,this.no_hp_pelanggan, this.keterangan_lokasi, this.id_gedung).subscribe(//call the post
                data => this.postMyPelanggan = JSON.stringify(data), // put the data returned from the server in our variable
                error => alert("Error"), // in case of failure show this message
                () => alert("Berhasil")//run this code in all cases
            );
    }
    postPesananToServer(){
        this.postDataToServer();
        this.onGetPelanggan();
        for (var i = 0; i < this.cartItems.length; i++) {
                this._pelangganService.postPesanan(this.id_pelanggan,this.id_cs, this.jumlah_pesanan, this.cartItems[i].id_menu_harian, this.status_pesanan,this.id_kurir, this.waktu_pemesanan).subscribe(//call the post
                data => this.postMyPesanan = JSON.stringify(data), // put the data returned from the server in our variable
                error => alert("Error"), // in case of failure show this message
                () => alert("Berhasil")//run this code in all cases
            );
        }
        this.id_pelanggan++;
    }
    onGetGedung(){     
        console.log('Getting user based on promise now.');
        this.gedungService.getGedung()
        .then(
        res=>this.getGedung = JSON.parse(JSON.stringify(res)),
        err=>alert(err)
    );
    }
    onGetPelanggan(){
        console.log('Getting user based on promise now.');
        this._pelangganService.getPelanggan()
        .then(
        res=>this.getPelanggan = JSON.parse(JSON.stringify(res)),
        err=>alert(err)
        );
    }
    ngOnInit() {
        this.onGetGedung();
    }

}