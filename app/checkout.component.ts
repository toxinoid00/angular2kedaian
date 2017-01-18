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
 
    nama_pelanggan;
    no_hp_pelanggan;
    keterangan_lokasi;
    id_gedung;

    private cartItems: Item[] = [];

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
    onGet(){     
        console.log('Getting user based on promise now.');
        this.gedungService.getGedung()
        .then(
        res=>this.getGedung = JSON.parse(JSON.stringify(res)),
        err=>alert(err)
    );
    }
    ngOnInit() {
        this.onGet();
    }
}